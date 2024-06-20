import { Component } from '@angular/core';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  result_list: any;

  constructor(private curos_service: CursosService) {
  }

  getCursosByName(event: any) {
    const value = event.target.value;
    if (value) {
      this.curos_service.getCursosoByName(value).subscribe(
        (data) => {
          this.result_list = data || []; // Ensure result_list is an array
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    } else {
      this.result_list = [];
    }
  }

}
