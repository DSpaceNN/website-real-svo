import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNumberCardComponent } from './container-number-card.component';

xdescribe('ContainerNumberCardComponent', () => {
  let component: ContainerNumberCardComponent<any>;
  let fixture: ComponentFixture<ContainerNumberCardComponent<any>>;

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
