import { Component, OnInit } from '@angular/core';
import {HttpcallService} from '../httpcall.service';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.scss']
})
export class ServiceCallComponent implements OnInit {

  constructor(private httpcallService: HttpcallService) { }

  ngOnInit() {
    this.httpcallService.getdata({}).subscribe((res) => {
      console.log(res);
    });
    // window.open('http://dummy.restapiexample.com/api/v1/employees');
    // window.open('https://www.sapphire-digital.com/smartshopper/');
  }
  needAuth() {
    return  this.httpcallService.isAuthenticated();
  }

}
