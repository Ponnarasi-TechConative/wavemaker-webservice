import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebServiceComponent } from './web-service/web-service.component';
import { MainScreenComponent } from './main-screen/main-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    WebServiceComponent,
    MainScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
