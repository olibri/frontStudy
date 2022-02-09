import { Router, Routes } from '@angular/router';
import {Component} from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public router:Router){

  }
  gotoPostPage(){
    this.router.navigate(['/posts'])
  }
}
