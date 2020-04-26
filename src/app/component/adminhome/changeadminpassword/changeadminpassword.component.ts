import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { password } from '../changeadminpassword/password';
import { ChangepasswordService } from './changepassword.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-changeadminpassword',
  templateUrl: './changeadminpassword.component.html',
  styleUrls: ['./changeadminpassword.component.scss']
})
export class ChangeadminpasswordComponent implements OnInit {

  passwordcg = new password();

  constructor(
    private http: HttpClient,
    private router: Router,
    private changepwdService: ChangepasswordService
    ) {}

    submitNewPW(form:NgForm) {
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
