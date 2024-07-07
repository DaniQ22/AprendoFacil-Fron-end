import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tema } from 'src/app/core/Models/model-tema';
import { S3Service } from 'src/app/core/services/s3.service';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnChanges {

  topicByDetail: Tema = {} as Tema;

  //Variable para almacenar la id del tema a consultar
  @Input() idTopic!: number;

  //Url del recurso alamacenado en s3
  urlResource!: string; 

  constructor(private serviceTopic: TopicService,
    private serviceS3: S3Service
  ){
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
        console.log("Topic obtained:  " + res);
    }, (error=> {
      console.log("Topic is no exist");
    }))
  }

  receibeIdTopic(idTopic: number){
    this.idTopic = idTopic;
  }

  
  //Metodo para abrir el pdf asociado de un tema en una nueva pagina
  openResource(url: string) {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('URL resource is not available');
      // Optionally, show a user-friendly message here
    }
  }

  //Metodo para ver el recurso de cada tema almacenado en s3
 

}
