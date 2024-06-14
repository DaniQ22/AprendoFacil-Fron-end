import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {


  constructor(private router: Router, private user: AuthServiceService){}



  navigateToListProduct(){
    this.router.navigate(['/dashboard/list-course']);
  }

}
