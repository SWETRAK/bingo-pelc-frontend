import {Component, OnDestroy, OnInit} from '@angular/core';
import {BpUserInfo} from "../../models/bp-user-info";

@Component({
  selector: 'app-bp-signup-page',
  templateUrl: './bp-signup-page.component.html',
  styleUrls: ['./bp-signup-page.component.css']
})
export class BpSignupPageComponent implements OnInit, OnDestroy{

    protected newUser: BpUserInfo | undefined;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    protected getNewUserInfo(data: BpUserInfo) {
        this.newUser = data;
        console.log(data);
    }
}
