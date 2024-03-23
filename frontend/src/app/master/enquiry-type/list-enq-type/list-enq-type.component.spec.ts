import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnqTypeComponent } from './list-enq-type.component';

describe('ListEnqTypeComponent', () => {
  let component: ListEnqTypeComponent;
  let fixture: ComponentFixture<ListEnqTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnqTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnqTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
