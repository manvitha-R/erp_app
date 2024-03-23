import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcatComponent } from './add-subcat.component';

describe('AddSubcatComponent', () => {
  let component: AddSubcatComponent;
  let fixture: ComponentFixture<AddSubcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
