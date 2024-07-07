import { query } from '@angular/animations';
import { Component, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { Course } from 'src/app/core/Models/model-curso';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent implements OnInit{

  @Output() listCourses: Course[] = [];


  constructor(private coursrService: CursosService){
  }

  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse() {
    this.coursrService.getAllCursos().subscribe(
      (res) => {
        if (res) {
          this.listCourses = res;
          console.log("All coruses avalaible: " + this.listCourses);
        }
      }
    )
  }

  

}
