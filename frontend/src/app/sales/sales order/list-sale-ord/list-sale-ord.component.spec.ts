import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleOrdComponent } from './list-sale-ord.component';

describe('ListSaleOrdComponent', () => {
  let component: ListSaleOrdComponent;
  let fixture: ComponentFixture<ListSaleOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSaleOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
