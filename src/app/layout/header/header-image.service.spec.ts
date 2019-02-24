import { TestBed } from '@angular/core/testing';

import { HeaderImageService } from './header-image.service';

describe('HeaderImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderImageService = TestBed.get(HeaderImageService);
    expect(service).toBeTruthy();
  });
});
