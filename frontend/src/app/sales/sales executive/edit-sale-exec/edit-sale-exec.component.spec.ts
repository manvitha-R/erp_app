import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleExecComponent } from './edit-sale-exec.component';

describe('EditSaleExecComponent', () => {
  let component: EditSaleExecComponent;
  let fixture: ComponentFixture<EditSaleExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaleExecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaleExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
