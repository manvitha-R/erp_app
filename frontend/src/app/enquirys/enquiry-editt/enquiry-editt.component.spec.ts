import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryEdittComponent } from './enquiry-editt.component';

describe('EnquiryEdittComponent', () => {
  let component: EnquiryEdittComponent;
  let fixture: ComponentFixture<EnquiryEdittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryEdittComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryEdittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
