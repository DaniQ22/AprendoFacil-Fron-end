import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/Models/model-curso';
import { CursosService } from 'src/app/core/services/cursos.service';
import { ServiceUtilService } from 'src/app/core/services/service-util.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  //Variable para almacenar la id de un curso
  courseId!: number;

  cursoById!: Course;


  //Variable para ver todos los temas de un curso
  showTopicsOfCourse: boolean = false;

  //Variable para ver todass las preguntas de un curso
  showQuestionsOfCourse: boolean = false;

  isOpenFormATopic: boolean = false;

  constructor(private route: ActivatedRoute,
    private cursoService: CursosService,
    private utilService: ServiceUtilService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = +params['id']; // El signo + convierte la cadena a número
      this.getCourseDetails(this.courseId);
    });

  }
  ngOnDestroy(): void {
  }

  //Metodo para buscar un curso por id
  getCourseDetails(id: number){
    this.cursoService.getCourseById(id).subscribe(
      (res: Course) => {
        if (res) {
          this.cursoById = res;
          console.log("Course obtained by id: ", this.cursoById);
        }
      }, (error)=> {
      alert("Erro: "+ error);
    })

  }
  openTopics() {
    this.showTopicsOfCourse = !this.showTopicsOfCourse;
  }


  openQuestiosn() {
    this.showQuestionsOfCourse = !this.showQuestionsOfCourse;
  }

  //Metodo para abrir el formulario para guardar un tema
  openFormTopic() {
    this.isOpenFormATopic = !this.isOpenFormATopic;
  }

  receibeEventCloseForm(event: boolean) {
    this.isOpenFormATopic = event;
  }

  receibeEventToOpenFormTopic(event: boolean){
    this.isOpenFormATopic = event;
  }
}
