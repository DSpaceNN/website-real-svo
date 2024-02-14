import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGoMainPageComponent } from './button-go-main-page.component';

xdescribe('ButtonGoMainPageComponent', () => {
  let component: ButtonGoMainPageComponent;
  let fixture: ComponentFixture<ButtonGoMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGoMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
