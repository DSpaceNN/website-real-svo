import { TestBed } from '@angular/core/testing';

import { RedirectToPageService } from './redirect-to-page.service';

describe('RedirectToPageService', () => {
  let service: RedirectToPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectToPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
