import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent {

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
