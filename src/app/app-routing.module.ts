import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './layouts/customers/login/login.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HomeComponent} from "./layouts/page/home/home.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
