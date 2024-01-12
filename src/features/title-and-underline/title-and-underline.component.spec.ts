import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndUnderlineComponent } from './title-and-underline.component';

describe('TitleAndUnderlineComponent', () => {
  let component: TitleAndUnderlineComponent;
  let fixture: ComponentFixture<TitleAndUnderlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAndUnderlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleAndUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
