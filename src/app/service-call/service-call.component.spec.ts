import { async, ComponentFixture, TestBed, fakeAsync , tick } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ServiceCallComponent } from './service-call.component';
import { HttpcallService } from '../httpcall.service';
import {  HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';


describe('ServiceCallComponent', () => {
  let component: ServiceCallComponent;
  let fixture: ComponentFixture<ServiceCallComponent>;
  let service: HttpcallService ;
  let httpTestingController: HttpTestingController;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ServiceCallComponent ],
      providers: [HttpcallService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCallComponent);
    component = fixture.componentInstance;
    // Instantaites HttpClient, HttpTestingController and EmployeeService
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpcallService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create service', () => {
    expect(service).toBeTruthy();
  });
  it('should  service have isAuthenticate method', () => {
    expect(service.isAuthenticated).toBeTruthy();
  });
  it('should isAuthenticate return true', () => {
     spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
     expect(component.needAuth()).toEqual(true);
  });


  it('should isAuthenticate return false', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needAuth()).toEqual(false);
    // expect(service.isAuthenticated).toBeFalsy();
  });
});
