import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalPipe } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceCallComponent } from './service-call/service-call.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpcallService } from './httpcall.service';
import { ThridPartyComponent } from './thrid-party/thrid-party.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceCallComponent,
    ThridPartyComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, FormsModule, AccordionModule.forRoot(), HttpClientModule
  ],
  providers: [DecimalPipe , HttpcallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
