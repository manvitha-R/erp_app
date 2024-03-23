import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubcatComponent } from './edit-subcat.component';

describe('EditSubcatComponent', () => {
  let component: EditSubcatComponent;
  let fixture: ComponentFixture<EditSubcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
