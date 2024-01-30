import { ComponentFixture, TestBed } from '@angular/core/testing';
import QuestWinPreviewComponent from "./quest-win-preview.component";


describe('QuestWinPreviewComponent', () => {
  let component: QuestWinPreviewComponent;
  let fixture: ComponentFixture<QuestWinPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestWinPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestWinPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
