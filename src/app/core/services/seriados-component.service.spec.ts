import { TestBed } from '@angular/core/testing';

import { SeriadosComponentService } from './seriados-component.service';

describe('SeriadosComponentService', () => {
  let service: SeriadosComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriadosComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
