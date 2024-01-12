import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCountComponent } from './questions-count.component';

describe('QuestionsCountComponent', () => {
  let component: QuestionsCountComponent;
  let fixture: ComponentFixture<QuestionsCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
