import { Component } from '@angular/core';
import { WebServiceComponent } from './web-service/web-service.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modalRef: any;

  constructor(private modalService: NgbModal) {}

}
