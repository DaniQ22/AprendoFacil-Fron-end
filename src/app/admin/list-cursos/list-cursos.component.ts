import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit {


  isOpenForm!: boolean;

  cursos: any[] = []

  constructor(private cursoService: CursosService) {
  }




  openForm() {
    this.isOpenForm = !this.isOpenForm;
  }


  ngOnInit(): void {
    this.getAllCursos();

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

}
