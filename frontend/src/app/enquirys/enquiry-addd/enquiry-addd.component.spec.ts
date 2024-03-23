import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryAdddComponent } from './enquiry-addd.component';

describe('EnquiryAdddComponent', () => {
  let component: EnquiryAdddComponent;
  let fixture: ComponentFixture<EnquiryAdddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryAdddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryAdddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
