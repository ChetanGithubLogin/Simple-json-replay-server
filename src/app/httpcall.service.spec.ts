import { TestBed } from '@angular/core/testing';

import { HttpcallService } from './httpcall.service';

xdescribe('HttpcallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpcallService = TestBed.get(HttpcallService);
    expect(service).toBeTruthy();
  });
});
