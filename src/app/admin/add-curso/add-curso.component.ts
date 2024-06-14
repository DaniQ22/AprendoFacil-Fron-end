import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsignaturaService } from 'src/app/core/services/asignatura.service';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  @Input() isOpenForm: boolean = false;

  formCourse!: FormGroup;

  dataCourse: any;

  asignaturas: any[] = [];
  constructor(private asignaturaSerivice: AsignaturaService,
    private cursoService: CursosService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.getAllAsignatura();

    this.formCourse = this.formBuilder.group({
      name: ['', Validators.required],
      decription: ['', Validators.required],
      id_asignatura: ['', Validators.required]
    })
  }

  getAllAsignatura() {
    this.asignaturaSerivice.getAsignature().subscribe(res => {
      if (res) {
        this.asignaturas = res;
      } else {
        this.asignaturas = [];
      }
    })
  }


  save() {
    if (!this.formCourse.valid) {
      alert("No deje ninguna campo vacio");
    }

    this.dataCourse = this.formCourse.value;
    this.dataCourse.id_asignatura = parseInt(this.dataCourse.id_asignatura, 10);  // Convertir id_asignatura a entero    
    console.log("Data to save: ", this.dataCourse)
    this.cursoService.saveCourse(this.dataCourse).subscribe(
      response => {
        alert("Inicio de sesión exitoso");
      },
      (error) => {
        alert(error.message); // Mostrar el mensaje de error en un alert
      }
    )
  }

  closeForm(){
    this.isOpenForm = false;
  }


}
