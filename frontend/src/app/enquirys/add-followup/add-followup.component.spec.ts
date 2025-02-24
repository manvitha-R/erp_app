import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFollowupComponent } from './add-followup.component';

describe('AddFollowupComponent', () => {
  let component: AddFollowupComponent;
  let fixture: ComponentFixture<AddFollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFollowupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
