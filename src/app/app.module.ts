import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
// Fusion chart start
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Powercharts from 'fusioncharts/fusioncharts.powercharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { LogoutComponent } from './component/logout/logout.component';
import { ChangepasswordComponent } from './component/home/changepassword/changepassword.component';
import { ChangeadminpasswordComponent } from './component/adminhome/changeadminpassword/changeadminpassword.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ParamsInterceptor } from './interceptor/params.interceptor';
// 按上面的顺序
FusionChartsModule.fcRoot(FusionCharts, Charts, Powercharts, FusionTheme);
// Fusion chart End

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ImportexcelComponent,
    IpolistComponent,
    ComparecompanyComponent,
    ComparesectorComponent,
    AdminhomeComponent,
    ManagecompanyComponent,
    ManageexchangeComponent,
    UpdateipodetailsComponent,
    SearchPipe,
    LogoutComponent,
    ChangepasswordComponent,
    ChangeadminpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule,
    FileUploadModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ParamsInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
