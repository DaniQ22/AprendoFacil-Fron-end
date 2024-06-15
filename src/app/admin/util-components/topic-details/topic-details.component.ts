import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tema } from 'src/app/core/Models/model-tema';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnChanges {

  topicByDetail!: Tema;

  //Variable para almacenar la id del tema a consultar
  @Input() idTopic!: number;


  constructor(private serviceTopic: TopicService){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['idTopic']) {
      console.log("Id topic changed: ", this.idTopic);
      if (this.idTopic) {
        this.getTopicById();
      }
    }
  }


  getTopicById(){
    this.serviceTopic.getTopicById(this.idTopic).subscribe(
      (res: Tema)=> {
        console.log("Id Topic "  + this.idTopic);
        this.topicByDetail = res;
        console.log("Topic obtained:  " + this.getTopicById);
    }, (error=> {
      console.log("Topic is no exist");
    }))
  }

  receibeIdTopic(idTopic: number){
    this.idTopic = idTopic;
  }

}
