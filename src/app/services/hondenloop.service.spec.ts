import { TestBed } from '@angular/core/testing';

import { HondenloopService } from './hondenloop.service';

describe('HondenloopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HondenloopService = TestBed.get(HondenloopService);
    expect(service).toBeTruthy();
  });
});
