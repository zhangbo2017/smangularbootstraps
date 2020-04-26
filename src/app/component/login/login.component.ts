import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 路由传参用到
import { Login } from './login';
import { LoginService } from '../login/login.service';
import { CommoninfoService } from '../../service/commoninfo.service';
import { Authresponse } from '../../service/authresponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new Login();
  // login: Login = {
  //   username: '',
  //   password: ''
  // };
  submitted = false;
  pageMessage = '';

  constructor(private router: Router,
    private loginService: LoginService,
    public commoninfoService: CommoninfoService,
    public authresponse: Authresponse) { }

  ngOnInit(): void {
      // a部署时需要注掉
    // this.login.username = 'Sunny';
    // this.login.password = '111111';
    // console.log('username::', this.login.username, 'pw::', this.login.password);
    this.pageMessage = '';
  }

  onSignin() {
    this.submitted = true;
    console.log('onSubmit() done!');
    this.loginService.findUser(this.login).subscribe(
      res => {
        console.log('data::', res.data);
        this.redirect(res.data);
      }, 
      error => this.pageMessage = error // error path
    );
  }

  // direct to different page according to user type(role)
  redirect(data: any) {
    if (data == null) {
      this.pageMessage = 'Please signup or recheck your password!';
      console.log(this.pageMessage);
      return;
    }
    this.commoninfoService.userId = data.id;
    this.commoninfoService.userRole = data.usertype;
    this.commoninfoService.userName = data.username;

    localStorage.setItem('JWT-Token', data.jwtToken);
    localStorage.setItem('currUserRole', data.usertype);
    localStorage.setItem('currUserName', data.username);
    this.authresponse.name = data.username;
    this.authresponse.role = data.usertype;
    this.authresponse.token = data.jwtToken;

    console.log(this.commoninfoService.userId);
    console.log(this.commoninfoService.userRole);
    if ('ROLE_admin' === data.usertype) {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/adminhome');
    } else if ('ROLE_user' === data.usertype) {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/home');
    } else {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/errorpage');
    }
  }

}
