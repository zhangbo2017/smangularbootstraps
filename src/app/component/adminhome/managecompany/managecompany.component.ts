import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';
import { IpoDetails } from './company';
import { CompanyIPO } from './company';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.scss'],
  providers: []
})

export class ManagecompanyComponent implements OnInit {
  closeResult = '';
  companies:Company[];
  // companies:any=[{companyCode:1,
  //   companyName:'kfc',
  //   turnover:333,
  //   ceo:'sunny',
  //   boardofdirectors:'22',
  //   listedinskex:'1',
  //   sectorName:'food',
  //   brifewriteup:'yes',
  //   stockCode:'222',
  //   companyStatus:'run'},
  //   {companyCode:2,
  //     companyName:'ibm',
  //     turnover:333,
  //     ceo:'sunny',
  //     boardofdirectors:'22',
  //     listedinskex:'1',
  //     sectorName:'food',
  //     brifewriteup:'yes',
  //     stockCode:'222',
  //     companyStatus:'run'},
  //     {companyCode:3,
  //       companyName:'bwm',
  //       turnover:333,
  //       ceo:'sunny',
  //       boardofdirectors:'22',
  //       listedinskex:'1',
  //       sectorName:'food',
  //       brifewriteup:'yes',
  //       stockCode:'222',
  //       companyStatus:'run'}];
  errMsg: any;
  company = new Company();
  companyipo = new CompanyIPO();
  companyForm = new Company();
  ipodetails = new IpoDetails();
  public search: any = '';
  

  constructor(private companyservice: CompanyService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getCompanies();
    
  }

  open(content:any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openedit(content:any,i:number) {
 
    // this.companyForm=this.companies[i];
    this.currentCompany(i);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  
getCompanies(){
  this.companyservice.getCompanies()
  .subscribe(
    res => {
      if (res.status === 200) {
        // console.log('response', response);
        this.companies = res.data;
      } else {
        alert (res.msg);
      }
    },
    // error => this.errMsg = error
    error => {
      this.errMsg = error;
      alert(error);
    }
  );
}
add() {
  console.log('this.company', this.company);
  this.companyservice.addCompany(this.company)
  .subscribe(
    res => {
      if (res.status === 200) {
        console.log('response', res);
        // this.companys = res.data;
        // this.companys.push();
        this.companies.push(this.company);
        alert (res.msg);
        this.getCompanies();
        this.company = new Company();
      } else {
        alert (res.msg);
        this.getCompanies();
        this.company = new Company();
      }
    },
    error => {
      this.errMsg = error;
      alert(error);
    }
  );
}
addall() {
  console.log('this.company', this.company);
  this.companyipo.company = this.company;
  this.ipodetails.companyName = this.company.companyName;
  this.companyipo.ipo = this.ipodetails;
  console.log('companyipo.ipo.openDateTime>>>', this.companyipo.ipo.openDateTime);
  if (this.companyipo.ipo.openDateTime === undefined ||  this.companyipo.ipo.openDateTime === null) {
    alert('Open Date Time is required! and format must be yyyy-MM-dd HH:mm:ss!');
  } else {
    this.companyservice.addCompanyIpo(this.companyipo)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          // this.companys = res.data;
          // this.companys.push();
          this.companies.push(this.company);
          alert (res.msg);
          this.getCompanies();
          this.company = new Company();
        } else {
          alert (res.msg);
          this.getCompanies();
          this.company = new Company();
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }
}
update() {
  // id = this.exchange.exchangeid;
  // console.log(typeof(i), i);
  // console.log('this.companyForm', this.companyForm); // undefined
  this.companyservice.updateCompany(this.companyForm)
  .subscribe(
    res => {
      if (res.status === 200) {
        console.log('response', res);
        console.log('slice', this.companies.slice(this.companyForm.companyid));
        // this.companyForm.splice(this.companyForm.exchangeid , 1, this.companyForm);
        // alert (res.msg);
        this.getCompanies();
        this.companyForm = new Company();
      } else {
        // alert (res.msg);
        this.getCompanies();
        this.companyForm = new Company();
      }
    },
    error => {
      this.errMsg = error;
      alert(error);
    }
  );
}
currentCompany(i: number) {
  this.companyservice.getCurrentCompany(this.companies[i].companyid)
  .subscribe(
    res => {
      if (res.status === 200) {
        console.log('response', res);
        this.companyForm = res.data;
      } else {
        alert (res.msg);
      }
    },
    error => {
      this.errMsg = error;
      alert(error);
    }
  );
}
}
