import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
    providedIn:'root'
})

export class DataServices{
    constructor(){

    }
   public counter = 0;

    plusCOunter(){
        this.counter++;
    }
    degreesCouner(){

        this.counter--;
    }
}