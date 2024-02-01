import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCardWrapperComponent } from './cta-card-wrapper.component';

describe('CtaCardWrapperComponent', () => {
  let component: CtaCardWrapperComponent;
  let fixture: ComponentFixture<CtaCardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaCardWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtaCardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
