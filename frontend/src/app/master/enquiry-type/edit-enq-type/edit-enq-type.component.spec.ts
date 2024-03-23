import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnqTypeComponent } from './edit-enq-type.component';

describe('EditEnqTypeComponent', () => {
  let component: EditEnqTypeComponent;
  let fixture: ComponentFixture<EditEnqTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnqTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnqTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
