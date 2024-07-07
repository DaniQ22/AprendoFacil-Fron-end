import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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

  file!: File;

  urlImg!: any;

  constructor(private asignaturaSerivice: AsignaturaService,
    private cursoService: CursosService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
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

    const formData = new FormData();

    this.dataCourse = this.formCourse.value;
    this.dataCourse.id_asignatura = parseInt(this.dataCourse.id_asignatura, 10);  // Convertir id_asignatura a entero    

    formData.append('curso', JSON.stringify(this.dataCourse));
    if (this.file) {
      formData.append('image', this.file, this.file.name);
    }


    console.log("Data to save: ", this.dataCourse)
    this.cursoService.saveCourse(formData).subscribe(
      response => {
        alert("Curso guardado correctamente");
        this.formCourse.reset();
      },
      (error) => {
        alert(error.message); // Mostrar el mensaje de error en un alert
      }
    )
  }

  closeForm(){
    this.isOpenForm = false;
  }

  getSanitizedImageUrl(image: File): any {
    this.urlImg = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(image)
    );
  }


  handleInputFile(event: any){
    this.file = event.target.files[0];
    this.getSanitizedImageUrl(this.file);
  }

}
