import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BpUserInfo} from "../../models/bp-user-info";
import {BpHttpService} from "../../services/bp-http.service";
import {Subscription} from "rxjs";
import {BpSignupWithEmailPass} from "../../models/bp-signup-with-email-pass";

@Component({
  selector: 'app-bp-signup-form',
  templateUrl: './bp-signup-form.component.html',
  styleUrls: ['./bp-signup-form.component.css']
})
export class BpSignupFormComponent implements OnDestroy{

    protected form: FormGroup;
    private subscriptions: Subscription[] = [];

    @Output("signup-data") public updateItemEvent: EventEmitter<BpUserInfo> = new EventEmitter<BpUserInfo>();

    constructor(
        private formBuilder: FormBuilder,
        private httpService: BpHttpService,
    ) {
        this.form = formBuilder.group({
            email: new FormControl<string>(""),
            password: new FormControl<string>(""),
            nickname: new FormControl<string>("")
        });
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected onSignupClick() {
        const registerData: BpSignupWithEmailPass = {
            email: this.form.get("email")?.value,
            password: this.form.get("password")?.value,
            nickname: this.form.get("nickname")?.value
        }

        const sub = this.httpService
            .registerUser(registerData)
            .subscribe({
                next: (data: BpUserInfo) => {
                    this.updateItemEvent.emit(data);
                },
                error: (error: any) => {
                    console.log(error);
                }
            });

        this.subscriptions.push(sub);
    }
}
