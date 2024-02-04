import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleAnimationComponent } from './circle-animation.component';

describe('CircleAnimationComponent', () => {
  let component: CircleAnimationComponent;
  let fixture: ComponentFixture<CircleAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
