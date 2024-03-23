import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlostEditComponent } from './orderlost-edit.component';

describe('OrderlostEditComponent', () => {
  let component: OrderlostEditComponent;
  let fixture: ComponentFixture<OrderlostEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlostEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
