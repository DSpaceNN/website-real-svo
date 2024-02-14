import { TestBed } from '@angular/core/testing';

import { ResultQuestService } from './result-quest.service';

xdescribe('ResultQuestService', () => {
  let service: ResultQuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultQuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
