import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleOrdComponent } from './edit-sale-ord.component';

describe('EditSaleOrdComponent', () => {
  let component: EditSaleOrdComponent;
  let fixture: ComponentFixture<EditSaleOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaleOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaleOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
