import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './layouts/customers/login/login.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HomeComponent} from "./layouts/page/home/home.component";
import {RegisterComponent} from './layouts/customers/register/register.component';
import {HouseEditComponent} from "./layouts/product/house-edit/house-edit.component";
import {UserAccoutComponent} from './layouts/customers/user-accout/user-accout.component';
import {HouseListComponent} from "./layouts/product/house-list/house-list.component";
import {HouseCreateComponent} from "./layouts/product/house-create/house-create.component";
import {HouseDetailComponent} from './layouts/product/house-detail/house-detail.component';
import {ContractComponent} from './layouts/contract/contract.component';
import {IntroduceComponent} from './layouts/page/introduce/introduce.component';
import {ContactComponent} from './layouts/page/contact/contact.component';
import {UserUpdateComponent} from "./layouts/customers/user-update/user-update.component";
import { ChangePaswordComponent } from './layouts/customers/change-pasword/change-pasword.component';


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
        path: 'introduce', component: IntroduceComponent
      },
      {
        path: ':id/contract', component: ContractComponent,
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path: 'change-password',component: ChangePaswordComponent,
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'user', component: UserAccoutComponent,
      },
      {
        path: 'user-update', component: UserUpdateComponent,
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
