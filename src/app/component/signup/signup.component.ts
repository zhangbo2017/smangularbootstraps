import { Component, OnInit } from '@angular/core';
import { CommoninfoService } from '../../service/commoninfo.service';
import { Authresponse } from '../../service/authresponse';
import { Router } from '@angular/router';
import { Signup } from './signup';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup = new Signup();
  submitted = false;
  pageMessage = '';

  constructor(private router: Router,
    public commoninfoService: CommoninfoService,
    public authresponse: Authresponse,
    private signupService: SignupService) { }

    ngOnInit() {
      this.pageMessage = '';
    }
  
    onSignup() {
      this.submitted = true;
      console.log('onSubmit() done!');
      this.signupService.addUser(this.signup).subscribe(
        res => {
          // this.pageMessage = res.msg;
          // console.log('message', this.pageMessage);
          console.log('message', res.msg);
          this.commoninfoService.infoMessage = res.msg;
          if (res.status === 200) {
            this.router.navigateByUrl('/login');
          } else {
            this.router.navigateByUrl('/signup');
          }
        },
        error => {
          this.pageMessage = error;
        }
      );
    }

}
