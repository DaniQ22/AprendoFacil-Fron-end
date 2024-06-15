import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Tema } from 'src/app/core/Models/model-tema';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.css']
})
export class CardTopicComponent implements OnInit, OnChanges{

  //Variable para recibir el id de un curso
  @Input() idCourse!: number;

  @Output() emitterEventOpenForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  //Con esta variable emitiremos el id del tema una vez se quiera ver el contenido de un tema
  EmitterIdTopic!:number;


  listTopicsByCourse: Tema[] = [];

  constructor(private serviceTopic: TopicService ){

  }

  ngOnInit(): void {
    this.getTopicsById();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.idCourse);
  }

  getTopicsById(){

    this.serviceTopic.getByTopicByCourse(this.idCourse).subscribe(res=>{
      if(res){
        this.listTopicsByCourse = res;
        console.log(this.listTopicsByCourse);
      }else{
        this.listTopicsByCourse = [];
      }
    })
    
  }

  emitterEventoOpenToFormTopic(){
    this.emitterEventOpenForm.emit(true);
  }

  EmitIdTopic(idTopic: number){
  this.EmitterIdTopic = idTopic;
  }


}
