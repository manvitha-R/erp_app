import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustMasterComponent } from './list-cust-master.component';

describe('ListCustMasterComponent', () => {
  let component: ListCustMasterComponent;
  let fixture: ComponentFixture<ListCustMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCustMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
