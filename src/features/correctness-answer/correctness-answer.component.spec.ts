import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectnessAnswerComponent } from './correctness-answer.component';

describe('CorrectnessAnswerComponent', () => {
  let component: CorrectnessAnswerComponent;
  let fixture: ComponentFixture<CorrectnessAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrectnessAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrectnessAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
