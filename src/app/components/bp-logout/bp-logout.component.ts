import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {BpHttpService} from "../../services/bp-http.service";
import {Router} from "@angular/router";
import {BpLocalStorageService} from "../../services/bp-local-storage.service";

@Component({
  selector: 'app-bp-logout',
  templateUrl: './bp-logout.component.html',
  styleUrls: ['./bp-logout.component.css']
})
export class BpLogoutComponent implements OnInit, OnDestroy{

    private subscriptions: Subscription[] = [];

    constructor(
        private httpService: BpHttpService,
        private router: Router,
        private localStorageService: BpLocalStorageService
    ) {

    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected logoutClicked() {
        let sub = this.httpService.logoutUser()
            .subscribe({
                next: () => {
                    this.localStorageService.clear();
                    this.router.navigateByUrl("/login").finally();
                },
                error: (error: any) => {
                    console.log(error);
                }
            });
        this.subscriptions.push(sub);
    }
}
