import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//配置路由
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ImportexcelComponent } from './component/adminhome/importexcel/importexcel.component';
import { IpolistComponent } from './component/home/ipolist/ipolist.component';
import { ComparecompanyComponent } from './component/home/comparecompany/comparecompany.component';
import { ComparesectorComponent } from './component/home/comparesector/comparesector.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { ManagecompanyComponent } from './component/adminhome/managecompany/managecompany.component';
import { ManageexchangeComponent } from './component/adminhome/manageexchange/manageexchange.component';
import { UpdateipodetailsComponent } from './component/adminhome/updateipodetails/updateipodetails.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ChangepasswordComponent } from './component/home/changepassword/changepassword.component';
import { ChangeadminpasswordComponent } from './component/adminhome/changeadminpassword/changeadminpassword.component';
const routes: Routes = [
  {path:'home',component:HomeComponent,
  children:[
    {path:'ipolist',component:IpolistComponent},
    {path:'comparecompany',component:ComparecompanyComponent},
    {path:'comparesector',component:ComparesectorComponent},
    {path:'changepassword',component:ChangepasswordComponent},
    {path:'**',redirectTo:'home'}
  ]},
  {path:'adminhome',component:AdminhomeComponent,
  children:[
    {path:'importexcel',component:ImportexcelComponent},
    {path:'manageexchange',component:ManageexchangeComponent},
    {path:'updateipodetails',component:UpdateipodetailsComponent},
    {path:'managecompany',component:ManagecompanyComponent},
    {path:'changeadminpassword',component:ChangeadminpasswordComponent},
    {path:'**',redirectTo:'adminhome'}
  ]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
