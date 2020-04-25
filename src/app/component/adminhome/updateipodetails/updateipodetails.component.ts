import { Component, OnInit } from '@angular/core';
import {IPO} from './ipo';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IposerviceService } from './iposervice.service';

declare let laydate;

@Component({
  selector: 'app-updateipodetails',
  templateUrl: './updateipodetails.component.html',
  styleUrls: ['./updateipodetails.component.scss']
})

export class UpdateipodetailsComponent implements OnInit {
  closeResult = '';
  ipos:IPO[];
  // ipos:any=[{ipoid:1,
  //   companyName:'aaa',
  //   stockExchange:'NAC',
  //   pricePerShare:3,
  //   totalNumber:'5',
  //   openDateTime:'2019-12-10',
  //   ipoRemarks:'no'},{ipoid:2,
  //     companyName:'aaa',
  //     stockExchange:'NAC',
  //     pricePerShare:3,
  //     totalNumber:'5',
  //     openDateTime:'2019-12-10',
  //     ipoRemarks:'no'},{ipoid:3,
  //       companyName:'aaa',
  //       stockExchange:'NAC',
  //       pricePerShare:3,
  //       totalNumber:'5',
  //       openDateTime:'2019-12-10',
  //       ipoRemarks:'no'}];
  ipoForm:any = new IPO();
  constructor(private modalService: NgbModal,private manageipoService:IposerviceService) { }

  ngOnInit() {
     this.getIpos();
  }
  open(content:any,i:number) {
 
    // this.ipoForm=this.ipos[i];
    this.currentIpo(i);
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

  getIpos() {
    this.manageipoService.getIPOs()
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.ipos = res.data;
        } else {
          alert (res.msg);
        }
      },
      // error => this.errMsg = error
      error => {
        // this.errMsg = error;
        alert(error);
      }
    );
  }

  currentIpo(i: number) {
    this.manageipoService.getCurrentIpo(this.ipos[i].ipoid).subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.ipoForm = res.data;
        } else {
          alert (res.msg);
        }
      },
      error => {
        // this.errMsg = error;
        alert(error);
      }
    );
  }

  updateipo() {
    if (this.ipoForm.openDateTime === null || this.ipoForm.openDateTime === undefined) {
      alert('Open Date Time is required! and format must be yyyy-MM-dd HH:mm:ss!');
    } else {
      this.manageipoService.updateIpo(this.ipoForm)
        .subscribe(
          res => {
            if (res.status === 200) {
              console.log('response', res);
              // alert (res.msg);
              this.getIpos();
              this.ipoForm = new IPO();
            } else {
              // alert (res.msg);
              this.getIpos();
              this.ipoForm = new IPO();
            }
          },
          error => {
            // this.errMsg = error;
            alert(error);
          }
        );
    }
  }
}

