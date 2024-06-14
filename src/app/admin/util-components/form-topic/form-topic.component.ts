import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.css']
})
export class FormTopicComponent implements OnInit, OnChanges{

  //Variable que almacena el id del curso cada vez que se almacena un tema
  @Input() idCourse!: number;

  //Variable para enviar el recurso de una tema, por ahora no enviaremos nada
  resourceTopic: string = "Sin recuros";

  //FormGroup para alamcenar la informacion de un tema
  formTopic!: FormGroup;
  //Data que se envia a la base de datos
  dataTopic!: any;

  @Output() closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formTopic = this.formBuilder.group ({
      nombre: ["", Validators.required],
      contenido: ["", Validators.required]
    })
  }

  ngOnChanges(): void {
    console.log("Id received: " + this.idCourse);
  }

  EmitEvent(event: boolean) {
    this.closeForm.emit(event);
  }




}
