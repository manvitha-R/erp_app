import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReqListComponent } from './purchase-req-list.component';

describe('PurchaseReqListComponent', () => {
  let component: PurchaseReqListComponent;
  let fixture: ComponentFixture<PurchaseReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
