import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thrid-party',
  templateUrl: './thrid-party.component.html',
  styleUrls: ['./thrid-party.component.scss']
})
export class ThridPartyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.processData();

  }

  processData() {
  //   var script = document.createElement("script");

  //   // Set the Type.
  //   script.type = "text/javascript";

  //   // Set the source to the URL the JSON Service.
  //   script.src = 'https://api.ipify.org?format=jsonp&callback=DisplayIP';

  //  // Append the script element to the HEAD section.
  //   document.getElementsByTagName('head')[0].appendChild(script);
  //   const  DisplayIP = (response) => {
  //     debugger;
  //     document.getElementById('ipaddress').innerHTML = 'Your IP Address is ' + response.ip;
  // }

  }

    DisplayIP(response) {
        document.getElementById('ipaddress').innerHTML = 'Your IP Address is ' + response.ip;
     }
}
