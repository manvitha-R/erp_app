import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnqTypeComponent } from './add-enq-type.component';

describe('AddEnqTypeComponent', () => {
  let component: AddEnqTypeComponent;
  let fixture: ComponentFixture<AddEnqTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnqTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnqTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
