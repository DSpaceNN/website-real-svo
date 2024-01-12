import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLightGrayComponent } from './line-light-gray.component';

describe('LineLightGrayComponent', () => {
  let component: LineLightGrayComponent;
  let fixture: ComponentFixture<LineLightGrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineLightGrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineLightGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
