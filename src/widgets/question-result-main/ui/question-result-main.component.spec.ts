import { ComponentFixture, TestBed } from '@angular/core/testing';
import {QuestionResultMainComponent} from "./question-result-main.component";


xdescribe('QuestionResultMainComponent', () => {
  let component: QuestionResultMainComponent<any>;
  let fixture: ComponentFixture<QuestionResultMainComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionResultMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionResultMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
