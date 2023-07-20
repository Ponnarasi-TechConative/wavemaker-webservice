import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
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
    // let modalRef = this.modalService.open(MainScreenComponent, options);
  }
  ngAfterViewInit(): void {
    // Swagger UI configuration
    const ui = SwaggerUIBundle({
      url: 'https://petstore.swagger.io/v2/swagger.json',
      dom_id: '#swagger-ui',
    });
  }
}
