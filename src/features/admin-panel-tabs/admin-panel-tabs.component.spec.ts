import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelTabsComponent } from './admin-panel-tabs.component';

describe('AdminPanelTabsComponent', () => {
  let component: AdminPanelTabsComponent;
  let fixture: ComponentFixture<AdminPanelTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPanelTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
