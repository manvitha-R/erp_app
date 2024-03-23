import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaleExecComponent } from './add-sale-exec.component';

describe('AddSaleExecComponent', () => {
  let component: AddSaleExecComponent;
  let fixture: ComponentFixture<AddSaleExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaleExecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaleExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
