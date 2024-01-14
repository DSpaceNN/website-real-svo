import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestFailedBlockComponent } from './quest-failed-block.component';

describe('QuestFailedBlockComponent', () => {
  let component: QuestFailedBlockComponent;
  let fixture: ComponentFixture<QuestFailedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestFailedBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestFailedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
