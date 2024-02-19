import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAdminPanelComponent } from './input-admin-panel.component';

describe('InputAdminPanelComponent', () => {
  let component: InputAdminPanelComponent;
  let fixture: ComponentFixture<InputAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAdminPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
