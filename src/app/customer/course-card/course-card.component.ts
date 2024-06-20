import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/Models/model-curso';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  listCourses: Course[] = [];
  constructor(private coursrService: CursosService){
  }


  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse(){
    this.coursrService.getAllCursos().subscribe(
      (res) => {
        if(res){
          this.listCourses = res;
          console.log("All coruses avalaible: " + res);
        }
      }
    )
  }

  

}
