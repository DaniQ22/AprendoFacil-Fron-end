import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tema } from 'src/app/core/Models/model-tema';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.css']
})
export class FormTopicComponent implements OnInit, OnChanges {

  selectedFile: File | null = null;

  //Variable que almacena el id del curso cada vez que se almacena un tema
  @Input() idCourse!: number;

  //Variable para enviar el recurso de una tema, por ahora no enviaremos nada
  resourceTopic: string = "Sin recuros";

  //FormGroup para alamcenar la informacion de un tema
  formTopic!: FormGroup;
  //Data que se envia a la base de datos
  dataTopic!: Tema;

  @Output() closeForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder,
    private serviceTopic: TopicService
  ) {
  }

  ngOnInit(): void {
    this.formTopic = this.formBuilder.group({
      nombre: ["", Validators.required],
      contenido: ["", Validators.required],
      
    })
  }

  ngOnChanges(): void {
    console.log("Id received: " + this.idCourse);
  }

  EmitEvent(event: boolean) {
    this.closeForm.emit(event);

  }

  saveTopicById() {
    if (!this.formTopic.valid) {
      alert("Please fill out the form");
      return;
    }

    this.dataTopic = this.formTopic.value;
    this.dataTopic.idCurso = this.idCourse;

    const formData = new FormData();
    formData.append('tema', JSON.stringify(this.dataTopic));
    if (this.selectedFile) {
      formData.append('resource', this.selectedFile, this.selectedFile.name);
    }


    this.serviceTopic.saveTopic(formData).subscribe(response => {
      alert("Topic saved succesfully");
    }, (error) => {
      alert("Error: " + error);
    });
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }



}
