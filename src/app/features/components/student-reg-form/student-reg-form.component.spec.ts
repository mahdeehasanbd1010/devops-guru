import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegFormComponent } from './student-reg-form.component';

describe('StudentRegFormComponent', () => {
  let component: StudentRegFormComponent;
  let fixture: ComponentFixture<StudentRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
