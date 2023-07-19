import { Component, OnInit } from '@angular/core';
import { WebServiceComponent } from './web-service/web-service.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  modalRef: any;

  constructor(private modalService: NgbModal) {}
  ngOnInit(){
    this.openModal()
  }
  openModal() {
    const options: NgbModalOptions = {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      centered: true 
    };
    let modalRef = this.modalService.open(WebServiceComponent, options);
		modalRef.componentInstance.name = 'World';
  }
}
