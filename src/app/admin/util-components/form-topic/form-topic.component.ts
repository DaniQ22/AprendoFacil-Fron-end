import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.css']
})
export class FormTopicComponent {

  @Output() closeForm:EventEmitter<boolean> = new EventEmitter<boolean>();

  EmitEvent(event: boolean){
    this.closeForm.emit(event);
  }

}
