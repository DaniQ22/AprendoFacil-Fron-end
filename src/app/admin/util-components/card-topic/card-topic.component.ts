import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tema } from 'src/app/core/Models/model-tema';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-card-topic',
  templateUrl: './card-topic.component.html',
  styleUrls: ['./card-topic.component.css']
})
export class CardTopicComponent implements OnInit{

  //Variable para recibir el id de un curso
  @Input() idCourse!: number;

  @Output() emitterEventOpenForm: EventEmitter<boolean> = new EventEmitter<boolean>();




  listTopicsByCourse: Tema[] = [];

  constructor(private serviceTopic: TopicService ){

  }

  ngOnInit(): void {
    this.getTopicsById();
  }

  getTopicsById(){

    this.serviceTopic.getByTopicByCourse(this.idCourse).subscribe(res=>{
      if(res){
        this.listTopicsByCourse = res;
      }else{
        this.listTopicsByCourse = [];
      }
    })
    
  }

  emitterEventoOpenToFormTopic(){
    this.emitterEventOpenForm.emit(true);
  }


}
