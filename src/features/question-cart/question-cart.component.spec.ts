import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCartComponent } from './question-cart.component';

describe('QuestionCartComponent', () => {
  let component: QuestionCartComponent;
  let fixture: ComponentFixture<QuestionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
