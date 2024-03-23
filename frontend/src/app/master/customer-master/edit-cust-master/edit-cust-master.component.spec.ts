import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustMasterComponent } from './edit-cust-master.component';

describe('EditCustMasterComponent', () => {
  let component: EditCustMasterComponent;
  let fixture: ComponentFixture<EditCustMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
