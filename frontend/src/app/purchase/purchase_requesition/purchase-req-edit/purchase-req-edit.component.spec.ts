import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReqEditComponent } from './purchase-req-edit.component';

describe('PurchaseReqEditComponent', () => {
  let component: PurchaseReqEditComponent;
  let fixture: ComponentFixture<PurchaseReqEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReqEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
