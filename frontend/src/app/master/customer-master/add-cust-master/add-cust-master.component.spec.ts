import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustMasterComponent } from './add-cust-master.component';

describe('AddCustMasterComponent', () => {
  let component: AddCustMasterComponent;
  let fixture: ComponentFixture<AddCustMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
