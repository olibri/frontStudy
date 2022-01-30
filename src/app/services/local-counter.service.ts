import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {

  public counter = 0;

    plusCOunter(){
        this.counter++;
    }
    degreesCouner(){
        this.counter--;
    }
}
