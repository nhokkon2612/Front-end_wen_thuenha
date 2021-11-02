import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/customers/login/login.component';
import { ContentComponent } from './layouts/page/content/content.component';
import { MasterComponent } from './layouts/page/master/master.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent
},
{
  path: 'login',
  component: LoginComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
