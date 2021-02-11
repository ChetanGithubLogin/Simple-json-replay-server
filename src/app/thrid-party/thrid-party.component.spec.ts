import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThridPartyComponent } from './thrid-party.component';

xdescribe('ThridPartyComponent', () => {
  let component: ThridPartyComponent;
  let fixture: ComponentFixture<ThridPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThridPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThridPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
