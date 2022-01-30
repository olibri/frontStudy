import { Component } from '@angular/core';
import { DataServices } from '../services/data.services';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

  constructor(public appCounterService: DataServices) { }


}
