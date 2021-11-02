import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './layouts/page/master/master.component';
import { DashboardComponent } from './layouts/page/dashboard/dashboard.component';
import { HeaderComponent } from './layouts/page/header/header.component';
import { SliderComponent } from './layouts/page/slider/slider.component';
import { FooterComponent } from './layouts/page/footer/footer.component';
import { ContentComponent } from './layouts/page/content/content.component';
import { FullwidthComponent } from './layouts/page/fullwidth/fullwidth.component';
import { ContainerComponent } from './layouts/page/container/container.component';
import { Fullwidth2Component } from './layouts/page/fullwidth2/fullwidth2.component';
import { LoginComponent } from './layouts/customers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DashboardComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    ContentComponent,
    FullwidthComponent,
    ContainerComponent,
    Fullwidth2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
