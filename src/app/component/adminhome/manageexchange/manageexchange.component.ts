import { Component, OnInit } from '@angular/core';
import {Exchange} from './exchange';
import { ExchangesService } from './exchanges.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.scss']
})
export class ManageexchangeComponent implements OnInit {
  closeResult = '';
  errMsg: any;
  exchange = new Exchange();
  stockExchange: string;
  exchangeForm = new Exchange();
  exchanges:Exchange[];
  // exchanges:any=[{exchangeid:1,stockExchange:'food',brief:'yes',contactnum:'18640892722',address:'dalian',remarks:'yes'},
  // {exchangeid:2,stockExchange:'food',brief:'yes',contactnum:'18640892722',address:'dalian',remarks:'yes'},
  // {exchangeid:3,stockExchange:'food',brief:'yes',contactnum:'18640892722',address:'dalian',remarks:'yes'}]

  constructor(private exchangesService: ExchangesService,private modalService: NgbModal) { }

  ngOnInit(){
    this.getExchanges();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openedit(content:any,i:number) {
 
    // this.exchangeForm=this.exchanges[i];
    this.currentExchange(i);
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
  
  getExchanges() {
    this.exchangesService.getExchanges()
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.exchanges = res.data;
        } else {
          alert (res.msg);
        }
      },
      // error => this.errMsg = error
      error => {
        this.errMsg = error;
        alert(error);
      }
      // exchanges => {
      //   console.log('response', exchanges);
      //   this.exchanges = exchanges;
      // }
      );
  }

  add() {
    console.log('this.exchange', this.exchange);
    this.exchangesService.addExchange(this.exchange)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          // this.exchanges = res.data;
          // this.exchanges.push();
          this.exchanges.push(this.exchange);
          alert (res.msg);
          this.getExchanges();
          this.exchange = new Exchange();
        } else {
          alert (res.msg);
          this.getExchanges();
          this.exchange = new Exchange();
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }

  currentExchange(i: number) {
    this.exchangesService.getCurrentExchange(this.exchanges[i].exchangeid)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          this.exchangeForm = res.data;
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

  update() {
    // id = this.exchange.exchangeid;
    // console.log(typeof(i), i);
    // console.log('this.exchangeForm', this.exchangeForm); // undefined
    this.exchangesService.updateExchange(this.exchangeForm)
    .subscribe(
      res => {
        if (res.status === 200) {
          console.log('response', res);
          // console.log('slice', this.exchanges.slice(this.exchangeForm.exchangeid));
          // this.exchangeForm.splice(this.exchangeForm.exchangeid , 1, this.exchangeForm);
          alert (res.msg);
          this.getExchanges();
          this.exchangeForm = new Exchange();
        } else {
          alert (res.msg);
          this.getExchanges();
          this.exchangeForm = new Exchange();
        }
      },
      error => {
        this.errMsg = error;
        alert(error);
      }
    );
  }
}
