import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { password } from './password';
import { ChangepasswordService } from './changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  passwordcg = new password();

  constructor(
    private http: HttpClient,
    private router: Router,
    private changepwdService: ChangepasswordService
    ) {}

    submitNewPW() {
      this.changepwdService.updatepw(this.passwordcg).subscribe(
        res => {
          if (res.data.msg === 200) {
            alert(res.data.msg);
            this.goTologinpage(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        }, // success path
        error => alert(error) // error path
      );
  }

  goTologinpage(retrunMsg: string) {
    alert(retrunMsg);
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.passwordcg.username = localStorage.getItem('currUserName');
  }

}
