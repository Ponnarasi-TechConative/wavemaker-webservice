import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-web-service',
  templateUrl: './web-service.component.html',
  styleUrls: ['./web-service.component.css']
})
export class WebServiceComponent {
  constructor(public activeModal: NgbActiveModal){

  }
}
