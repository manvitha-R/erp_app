import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcatComponent } from './list-subcat.component';

describe('ListSubcatComponent', () => {
  let component: ListSubcatComponent;
  let fixture: ComponentFixture<ListSubcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
