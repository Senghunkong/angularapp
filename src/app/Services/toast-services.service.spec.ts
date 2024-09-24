import { TestBed } from '@angular/core/testing';

import { ToastServicesService } from './toast-services.service';

describe('ToastServicesService', () => {
  let service: ToastServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
