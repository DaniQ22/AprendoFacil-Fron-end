import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/Models/model-curso';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnChanges {

  @Input() listCourse: Course[] = [];

  isOpenNabVar: boolean = false;

  isMenuOpen = false;
  constructor(
    private route: Router
  ){

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("Courses reveiver", this.listCourse);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openNavBar(){
    this.isOpenNabVar = !this.isOpenNabVar;
  }


  navigateToRouteCourse(){
    this.route.navigate(['/courses'], {state: {courses: this.listCourse}})    
  }


}
