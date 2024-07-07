import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorCourseComponent } from './indicator-course.component';

describe('IndicatorCourseComponent', () => {
  let component: IndicatorCourseComponent;
  let fixture: ComponentFixture<IndicatorCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorCourseComponent]
    });
    fixture = TestBed.createComponent(IndicatorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
