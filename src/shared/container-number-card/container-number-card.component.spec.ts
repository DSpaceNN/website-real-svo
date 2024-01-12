import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNumberCardComponent } from './container-number-card.component';

describe('ContainerNumberCardComponent', () => {
  let component: ContainerNumberCardComponent;
  let fixture: ComponentFixture<ContainerNumberCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerNumberCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
