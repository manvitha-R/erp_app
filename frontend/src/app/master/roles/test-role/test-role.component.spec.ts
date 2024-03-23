import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoleComponent } from './test-role.component';

describe('TestRoleComponent', () => {
  let component: TestRoleComponent;
  let fixture: ComponentFixture<TestRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
