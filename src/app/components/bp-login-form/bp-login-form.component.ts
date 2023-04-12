import {Component, OnDestroy, OnInit} from '@angular/core';
import {BpHttpService} from "../../services/bp-http.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BpLoginWithEmailPass} from "../../models/bp-login-with-email-pass";
import {Subscription} from "rxjs";
import {BpUserInfo} from "../../models/bp-user-info";
import {Router} from "@angular/router";
import {BpLocalStorageService} from "../../services/bp-local-storage.service";

@Component({
  selector: 'app-bp-login-form',
  templateUrl: './bp-login-form.component.html',
  styleUrls: ['./bp-login-form.component.css']
})
export class BpLoginFormComponent implements OnInit, OnDestroy{

    protected form: FormGroup;
    private subscriptions: Subscription[] = [];

    constructor(
        private httpService: BpHttpService,
        private formBuilder: FormBuilder,
        private localStorageService: BpLocalStorageService,
        private router: Router
    ) {
        this.form = formBuilder.group({
            email: new FormControl<string>(""),
            password: new FormControl<string>("")
        });
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected onLoginClick() {
        const loginData: BpLoginWithEmailPass = {
            email: this.form.get("email")?.value,
            password: this.form.get("password")?.value
        }

        const sub = this.httpService
            .loginUser(loginData)
            .subscribe({
                next: (data: BpUserInfo) => {
                    this.localStorageService.save("user", JSON.stringify(data));
                    this.router.navigateByUrl("/").finally();
                },
                error: (error: any) => {
                    console.log(error);
                }
            });

        this.subscriptions.push(sub);
    }
}
