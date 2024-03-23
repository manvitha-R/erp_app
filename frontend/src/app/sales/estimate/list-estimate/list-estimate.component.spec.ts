import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstimateComponent } from './list-estimate.component';

describe('ListEstimateComponent', () => {
  let component: ListEstimateComponent;
  let fixture: ComponentFixture<ListEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
