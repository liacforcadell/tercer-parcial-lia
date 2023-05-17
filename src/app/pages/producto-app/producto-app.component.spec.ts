import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoAppComponent } from './producto-app.component';

describe('ProductoAppComponent', () => {
  let component: ProductoAppComponent;
  let fixture: ComponentFixture<ProductoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoAppComponent]
    });
    fixture = TestBed.createComponent(ProductoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
