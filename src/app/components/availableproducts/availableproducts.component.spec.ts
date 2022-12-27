import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableproductsComponent } from './availableproducts.component';

describe('AvailableproductsComponent', () => {
  let component: AvailableproductsComponent;
  let fixture: ComponentFixture<AvailableproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
