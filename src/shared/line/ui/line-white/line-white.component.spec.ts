import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWhiteComponent } from './line-white.component';

describe('LineWhiteComponent', () => {
  let component: LineWhiteComponent;
  let fixture: ComponentFixture<LineWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineWhiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
