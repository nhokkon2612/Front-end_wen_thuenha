import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './layouts/customers/login/login.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HomeComponent} from "./layouts/page/home/home.component";
import {RegisterComponent} from './layouts/customers/register/register.component';
import {HouseEditComponent} from "./layouts/product/house-edit/house-edit.component";
import { UserAccoutComponent } from './layouts/customers/user-accout/user-accout.component';
import {HouseListComponent} from "./layouts/product/house-list/house-list.component";
import {HouseCreateComponent} from "./layouts/product/house-create/house-create.component";
import { HouseDetailComponent } from './layouts/product/house-detail/house-detail.component';
import { ContractComponent } from './layouts/contract/contract.component';


const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: '', component: MasterComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path:'user/update',component: UserAccoutComponent
      },
      {
        path:'contract', component: ContractComponent,
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path: 'houses',
        children: [
          {
            path: "", component: HouseListComponent,
          },
          {
            path: "create", component: HouseCreateComponent,
          },
          {
            path: ":id/detail", component: HouseDetailComponent,
          },
          {
            path: ":id/update", component: HouseEditComponent,
          }
        ]
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
