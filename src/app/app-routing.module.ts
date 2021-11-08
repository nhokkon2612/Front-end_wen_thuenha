import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './layouts/customers/login/login.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HomeComponent} from "./layouts/page/home/home.component";
import {RegisterComponent} from './layouts/customers/register/register.component';
import {ProductListComponent} from './layouts/product/product-list/product-list.component';
import {ProductCreateComponent} from './layouts/product/product-create/product-create.component';
import {ProductDetailComponent} from './layouts/product/product-detail/product-detail.component';
import {HouseEditComponent} from "./layouts/product/house-edit/house-edit.component";
import { UserAccoutComponent } from './layouts/customers/user-accout/user-accout.component';


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
        path:'user-accout/update',component: UserAccoutComponent
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path: 'houses',
        children: [
          {
            path: "", component: ProductListComponent,
          },
          {
            path: "create", component: ProductCreateComponent,
          },
          {
            path: ":id/detail", component: ProductDetailComponent,
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
