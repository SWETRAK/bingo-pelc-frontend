import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BpBingoPageComponent} from "./pages/bp-bingo-page/bp-bingo-page.component";
import {BpLoginPageComponent} from "./pages/bp-login-page/bp-login-page.component";
import {BpLoggedInGuard} from "./guards/bp-logged-in.guard";
import {BpLoggedOutGuard} from "./guards/bp-logged-out.guard";
import {BpSignupPageComponent} from "./pages/bp-signup-page/bp-signup-page.component";

const routes: Routes = [
    {path: "", component: BpBingoPageComponent, canActivate: [BpLoggedInGuard]},
    {path: "login", component: BpLoginPageComponent, canActivate: [BpLoggedOutGuard]},
    {path: "signup", component: BpSignupPageComponent, canActivate: [BpLoggedInGuard]}
    // {path: "**"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
