import { Component, ViewChild, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularProject';
  @ViewChild('getAccordion', { static: false }) getAccordion: any;

  constructor(private decimal: DecimalPipe, private router: Router) { }
  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.getAccordion);
    }, 500);

  }
  change(i) {
    if (i === '0') {
      this.getAccordion.groups[0].isOpen = true;
      this.getAccordion.groups[2].isOpen = false;
      this.getAccordion.groups[1].isOpen = false;
    }
    if (i === '1') {
      this.getAccordion.groups[1].isOpen = true;
      this.getAccordion.groups[0].isOpen = false;
      this.getAccordion.groups[2].isOpen = false;
    }
    if (i === '2') {
      this.getAccordion.groups[2].isOpen = true;
      this.getAccordion.groups[0].isOpen = false;
      this.getAccordion.groups[1].isOpen = false;
    }
  }
  openSuphire() {
    this.router.navigate(['other']);  }
}
