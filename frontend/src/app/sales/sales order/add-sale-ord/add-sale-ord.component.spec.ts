import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleOrdComponent } from './add-sale-ord.component';

describe('AddSaleOrdComponent', () => {
  let component: AddSaleOrdComponent;
  let fixture: ComponentFixture<AddSaleOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaleOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
