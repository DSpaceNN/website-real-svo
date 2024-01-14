import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSwoComponent } from './logo-swo.component';

describe('LogoSwoComponent', () => {
  let component: LogoSwoComponent;
  let fixture: ComponentFixture<LogoSwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoSwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
