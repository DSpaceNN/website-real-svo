import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueNumberCartComponent } from './unique-number-cart.component';

describe('UniqueNumberCartComponent', () => {
  let component: UniqueNumberCartComponent;
  let fixture: ComponentFixture<UniqueNumberCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueNumberCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniqueNumberCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
