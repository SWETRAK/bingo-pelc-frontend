import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {catchError, map, Observable, of, take} from 'rxjs';
import {BpHttpService} from "../services/bp-http.service";
import {BpUserInfo} from "../models/bp-user-info";
import {BpLocalStorageService} from "../services/bp-local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class BpLoggedInGuard implements CanActivate {

    constructor(
        private httpService: BpHttpService,
        private localStorageService: BpLocalStorageService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.httpService.getUserInfo().pipe(take(1)).pipe(
            map((user: BpUserInfo) => {
                this.localStorageService.save("user", JSON.stringify(user));
                return true;
            }),
            catchError((error: any) => {
                if(error.status === 401) {
                    this.localStorageService.clear();
                    return of(this.router.parseUrl("/login"));
                } else {
                    return of(false);
                }
            })
        );
    }

}
