import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlostListComponent } from './orderlost-list.component';

describe('OrderlostListComponent', () => {
  let component: OrderlostListComponent;
  let fixture: ComponentFixture<OrderlostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
