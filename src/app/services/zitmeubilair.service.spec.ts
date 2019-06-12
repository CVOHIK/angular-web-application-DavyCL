import { TestBed } from '@angular/core/testing';

import { ZitmeubilairService } from './zitmeubilair.service';

describe('ZitmeubilairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZitmeubilairService = TestBed.get(ZitmeubilairService);
    expect(service).toBeTruthy();
  });
});
