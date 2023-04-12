import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BpDailyQuestion} from "../models/bp-daily-question";
import {BpDailyBingo} from "../models/bp-daily-bingo";
import {BpLoginWithEmailPass} from "../models/bp-login-with-email-pass";
import {BpUserInfo} from "../models/bp-user-info";

@Injectable({
  providedIn: 'root'
})
export class BpHttpService {

    private baseApiUrl: string = "http://localhost:5093/api/v1/bingo/daily";

    constructor(private http: HttpClient) {
    }

    public loginUser(loginData: BpLoginWithEmailPass) {
        return this.http.post<BpUserInfo>("http://localhost:5093/auth/login", loginData, {withCredentials: true});
    }

    public getUserInfo(){
        return this.http.get<BpUserInfo>("http://localhost:5093/auth/info", {withCredentials: true});
    }

    public logoutUser() {
        return this.http.delete("http://localhost:5093/auth/logout", {withCredentials: true});
    }

    public getDailyBingo() {
        return this.http.get<BpDailyBingo>(this.baseApiUrl, {withCredentials: true});
    }

    public generateDailyBingo() {
        return this.http.get<BpDailyBingo>(this.baseApiUrl + "/generate", {withCredentials: true});
    }

    public checkDailyBingo() {
        return this.http.get<BpDailyBingo>(this.baseApiUrl + "/win", {withCredentials: true});
    }

    public checkDailyQuestion(dailyQuestion: BpDailyQuestion ) {
        return this.http.put<BpDailyQuestion>(this.baseApiUrl + "/questions", dailyQuestion, {withCredentials: true});
    }
}
