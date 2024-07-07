import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCurrentCustomerComponent } from './nav-current-customer.component';

describe('NavCurrentCustomerComponent', () => {
  let component: NavCurrentCustomerComponent;
  let fixture: ComponentFixture<NavCurrentCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavCurrentCustomerComponent]
    });
    fixture = TestBed.createComponent(NavCurrentCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
