import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HeaderComponent} from './layouts/page/header/header.component';
import {FooterComponent} from './layouts/page/footer/footer.component';
import {LoginComponent} from './layouts/customers/login/login.component';
import {HomeComponent} from './layouts/page/home/home.component';
import {RegisterComponent} from './layouts/customers/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {UserAccoutComponent} from './layouts/customers/user-accout/user-accout.component';
import {httpInterceptorProviders} from './addtoken.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HouseEditComponent} from './layouts/product/house-edit/house-edit.component';
import {UploadComponent} from './layouts/upload/upload.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HouseListComponent} from "./layouts/product/house-list/house-list.component";
import {HouseDetailComponent} from "./layouts/product/house-detail/house-detail.component";
import { HouseCreateComponent } from './layouts/product/house-create/house-create.component';
import {MatButtonModule} from "@angular/material/button";
import { ContractComponent } from './layouts/contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserAccoutComponent,
    HouseEditComponent,
    UploadComponent,
    HouseListComponent,
    HouseDetailComponent,
    HouseCreateComponent,
    ContractComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
        MatButtonModule
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
