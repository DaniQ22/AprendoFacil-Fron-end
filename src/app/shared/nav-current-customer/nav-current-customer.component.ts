import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-current-customer',
  templateUrl: './nav-current-customer.component.html',
  styleUrls: ['./nav-current-customer.component.css']
})
export class NavCurrentCustomerComponent implements OnInit{

  navItemActive: boolean = false;
  iconNavUser: string = "fas fa-user"; 
  isDropdownOpen = false;

  constructor( private router: Router,
    private activeRouter: ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.navItemActive = this.router.url.includes('/my-courses');
    });
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
