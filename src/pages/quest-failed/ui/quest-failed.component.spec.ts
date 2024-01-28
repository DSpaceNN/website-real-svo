import { ComponentFixture, TestBed } from '@angular/core/testing';
import QuestFailedComponent from "./quest-failed.component";


describe('QuestFailedComponent', () => {
  let component: QuestFailedComponent;
  let fixture: ComponentFixture<QuestFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestFailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
