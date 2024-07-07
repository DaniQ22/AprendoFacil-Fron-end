import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCustomerLayoutComponent } from './current-customer-layout.component';

describe('CurrentCustomerLayoutComponent', () => {
  let component: CurrentCustomerLayoutComponent;
  let fixture: ComponentFixture<CurrentCustomerLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentCustomerLayoutComponent]
    });
    fixture = TestBed.createComponent(CurrentCustomerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
