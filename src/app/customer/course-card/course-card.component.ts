import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/Models/model-curso';
import { Curso } from 'src/app/core/Models/seach-cursos';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  listCourses: Course[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) 
  {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.listCourses = navigation.extras.state['courses'];
    }
  }


  ngOnInit(): void {
  }


  // Metodo para mostrar una parte del descripcion de un curso
  truncateContent(content: string, limit: number): string {
    if (content.length > limit) {
      return content.substring(0, limit) + '...';
    }
    return content;
  }

  //Metodo para navegar a login user des  card-curso
  navigateToLoginUser() {
    this.router.navigate(['/login-user'])
  }





}
