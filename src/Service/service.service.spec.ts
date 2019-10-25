import { TestBed } from '@angular/core/testing';

import { serviceSurvey } from './serviceSurvey.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });
});
