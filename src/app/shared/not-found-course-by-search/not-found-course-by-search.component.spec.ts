import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCourseBySearchComponent } from './not-found-course-by-search.component';

describe('NotFoundCourseBySearchComponent', () => {
  let component: NotFoundCourseBySearchComponent;
  let fixture: ComponentFixture<NotFoundCourseBySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundCourseBySearchComponent]
    });
    fixture = TestBed.createComponent(NotFoundCourseBySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
