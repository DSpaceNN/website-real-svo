import { ComponentFixture, TestBed } from '@angular/core/testing';
import CartNotFoundComponent from "./cart-not-found.component";


xdescribe('CartNotFoundComponent', () => {
  let component: CartNotFoundComponent;
  let fixture: ComponentFixture<CartNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
