import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators'; // Importa filter para filtrar eventos específicos de navegación
import { CursosService } from 'src/app/core/services/cursos.service';
import { ServiceUtilService } from 'src/app/core/services/service-util.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit {


  isOpenForm!: boolean;

  showTableCourse: boolean = true; // Variable para controlar la visibilidad de la tabla de cursos

  cursos: any[] = []

  constructor(private cursoService: CursosService,
    private router: Router,
    private utilService: ServiceUtilService) 
    {
      
    }




  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }


  ngOnInit(): void {
    this.getAllCursos();

    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)) // Filtra solo los eventos NavigationEnd
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects); // Llama a checkRoute con la URL actual para verificar si debe ocultar la tabla
      });
  }




  getAllCursos() {
    this.cursoService.getAllCursos().subscribe(res => {
      if (res) {
        console.log("Cursos: ", res);
        this.cursos = res;
      } else {
        this.cursos = [];
      }
    })
  }

  navigateToDetailCourse(id: number) {
    this.showTableCourse = false;
    this.router.navigate(['/dashboard/list-course/detail-course', id])
  }

  checkRoute(url: string): void {
    const hideRoutes = ['/dashboard/list-course/detail-course']; // Define las rutas donde se debe ocultar la tabla
    this.showTableCourse = !hideRoutes.some(route => url.includes(route)); // Si la URL actual incluye alguna ruta de hideRoutes, oculta la tabla
  }

}
