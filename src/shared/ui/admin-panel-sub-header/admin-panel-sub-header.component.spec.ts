import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelSubHeaderComponent } from './admin-panel-sub-header.component';

describe('AdminPanelSubHeaderComponent', () => {
  let component: AdminPanelSubHeaderComponent;
  let fixture: ComponentFixture<AdminPanelSubHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPanelSubHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPanelSubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
