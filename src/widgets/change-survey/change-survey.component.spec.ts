import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSurveyComponent } from './change-survey.component';

describe('ChangeSurveyComponent', () => {
  let component: ChangeSurveyComponent;
  let fixture: ComponentFixture<ChangeSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeSurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
