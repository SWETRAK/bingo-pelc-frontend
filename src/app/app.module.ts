import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BpBingoCellComponent } from './components/bp-bingo-cell/bp-bingo-cell.component';
import { BpBingoRootComponent } from './components/bp-bingo-root/bp-bingo-root.component';
import { HttpClientModule } from "@angular/common/http";
import { BpBingoPageComponent } from './pages/bp-bingo-page/bp-bingo-page.component';
import { BpLoginPageComponent } from './pages/bp-login-page/bp-login-page.component';
import { BpLoginFormComponent } from './components/bp-login-form/bp-login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BpLogoutComponent } from './components/bp-logout/bp-logout.component';

@NgModule({
    declarations: [
        AppComponent,
        BpBingoCellComponent,
        BpBingoRootComponent,
        BpBingoPageComponent,
        BpLoginPageComponent,
        BpLoginFormComponent,
        BpLogoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
