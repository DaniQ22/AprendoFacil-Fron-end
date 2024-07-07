import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCourseComponent } from './not-found-course.component';

describe('NotFoundCourseComponent', () => {
  let component: NotFoundCourseComponent;
  let fixture: ComponentFixture<NotFoundCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundCourseComponent]
    });
    fixture = TestBed.createComponent(NotFoundCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
