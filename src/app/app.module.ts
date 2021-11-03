import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './layouts/page/master/master.component';
import { HeaderComponent } from './layouts/page/header/header.component';
import { FooterComponent } from './layouts/page/footer/footer.component';
import { LoginComponent } from './layouts/customers/login/login.component';
import { HomeComponent } from './layouts/page/home/home.component';
import { RegisterComponent } from './layouts/customers/register/register.component';
import { ProductListComponent } from './layouts/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
