import { TestBed } from '@angular/core/testing';

import { StafflistsService } from './stafflists.service';

describe('StafflistsService', () => {
  let service: StafflistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StafflistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
