import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedgamesComponent } from './expectedgames.component';

describe('ExpectedgamesComponent', () => {
  let component: ExpectedgamesComponent;
  let fixture: ComponentFixture<ExpectedgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectedgamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpectedgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
