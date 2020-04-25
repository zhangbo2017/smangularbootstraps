import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalURL } from '../../config/globalconfig';

const BSEURL = LocalURL.serverURL + 'smcuser';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private http: HttpClient,  private router: Router) { }

  ngOnInit(): void {

    this.http.get(BSEURL + "/logout/"+localStorage.getItem('currUserName'))
      .subscribe(res=>{
        // this.message=
        this.getFirstData(res);
      });
  }

  getFirstData(returnedObj: any){
    // alert(returnedObj.msg);
    if(returnedObj.status==200){
      this.router.navigateByUrl('/login');
    }
  }

}
