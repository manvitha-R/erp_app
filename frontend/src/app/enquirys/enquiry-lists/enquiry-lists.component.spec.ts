import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryListsComponent } from './enquiry-lists.component';

describe('EnquiryListsComponent', () => {
  let component: EnquiryListsComponent;
  let fixture: ComponentFixture<EnquiryListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
