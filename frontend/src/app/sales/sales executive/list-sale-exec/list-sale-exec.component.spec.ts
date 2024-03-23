import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSaleExecComponent } from './list-sale-exec.component';

describe('ListSaleExecComponent', () => {
  let component: ListSaleExecComponent;
  let fixture: ComponentFixture<ListSaleExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSaleExecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSaleExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
