import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './layouts/customers/login/login.component';
import {MasterComponent} from './layouts/page/master/master.component';
import {HomeComponent} from "./layouts/page/home/home.component";
import {RegisterComponent} from './layouts/customers/register/register.component';
import { ProductListComponent } from './layouts/product/product-list/product-list.component';
import { UserAccoutComponent } from './layouts/customers/user-accout/user-accout.component';
import { ProductCreateComponent } from './layouts/product/product-create/product-create.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', component: MasterComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path:"product-list", component: ProductListComponent,
        children:[
          {
            path:"product-create", component: ProductCreateComponent,
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
