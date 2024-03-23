import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpMasterComponent } from './add-emp-master.component';

describe('AddEmpMasterComponent', () => {
  let component: AddEmpMasterComponent;
  let fixture: ComponentFixture<AddEmpMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmpMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmpMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
