import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseByStudentComponent } from './add-course-by-student.component';

describe('AddCourseByStudentComponent', () => {
  let component: AddCourseByStudentComponent;
  let fixture: ComponentFixture<AddCourseByStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseByStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
