import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.css']
})
export class ListCursosComponent implements OnInit{

  cursos: any[] = []

  constructor(private cursoService: CursosService){
  }


  ngOnInit(): void {
    this.getAllCursos();
    
  }


  getAllCursos(){
    this.cursoService.getAllCursos().subscribe(res=> {
      if(res){
        console.log("Cursos: ", res);
        this.cursos = res;
      }else{
        this.cursos = [];
      }
    })
  }

}
