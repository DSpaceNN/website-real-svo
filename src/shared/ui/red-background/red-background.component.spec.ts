import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBackgroundComponent } from './red-background.component';

describe('RedBackgroundComponent', () => {
  let component: RedBackgroundComponent;
  let fixture: ComponentFixture<RedBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
