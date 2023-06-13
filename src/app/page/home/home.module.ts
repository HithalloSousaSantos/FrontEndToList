import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeService } from './home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    NgbModule,
  ],
  exports: [
    HomeComponent
  ],
  providers: [
   HomeService
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
