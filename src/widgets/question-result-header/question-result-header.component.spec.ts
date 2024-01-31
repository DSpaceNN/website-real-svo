import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResultHeaderComponent } from './question-result-header.component';

describe('QuestionResultHeaderComponent', () => {
  let component: QuestionResultHeaderComponent;
  let fixture: ComponentFixture<QuestionResultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionResultHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
