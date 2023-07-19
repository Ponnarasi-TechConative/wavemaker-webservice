import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-web-service',
  templateUrl: './web-service.component.html',
  styleUrls: ['./web-service.component.css'],
})
export class WebServiceComponent {
  public serviceList = [
    {
      name: 'REST',
      img: '',
    },
    {
      name: 'SOAP',
      img: '',
    },
    {
      name: 'WebSocket',
      img: '',
    },
  ];
  serviceflag:boolean = true
  selectedService:string = ''
  constructor(public activeModal: NgbActiveModal) {}

  selectService(service:string){
    this.selectedService = service
    this.serviceflag = false
  }
}
