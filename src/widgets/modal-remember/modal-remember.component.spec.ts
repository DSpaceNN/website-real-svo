import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRememberComponent } from './modal-remember.component';

describe('ModalRememberComponent', () => {
  let component: ModalRememberComponent;
  let fixture: ComponentFixture<ModalRememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRememberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
