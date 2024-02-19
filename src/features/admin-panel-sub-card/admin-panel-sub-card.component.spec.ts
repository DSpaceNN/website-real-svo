import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSubCardComponent } from './admin-panel-sub-card.component';

describe('AdminPanelSubCardComponent', () => {
  let component: AdminPanelSubCardComponent;
  let fixture: ComponentFixture<AdminPanelSubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelSubCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPanelSubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
