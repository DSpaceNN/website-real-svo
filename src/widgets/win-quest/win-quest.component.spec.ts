import { ComponentFixture, TestBed } from '@angular/core/testing';
import WinQuestComponent from "./win-quest.component";


describe('WinQuestComponent', () => {
  let component: WinQuestComponent;
  let fixture: ComponentFixture<WinQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinQuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
