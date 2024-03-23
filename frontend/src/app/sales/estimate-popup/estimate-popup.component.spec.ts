import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePopupComponent } from './estimate-popup.component';

describe('EstimatePopupComponent', () => {
  let component: EstimatePopupComponent;
  let fixture: ComponentFixture<EstimatePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
