import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const VALUE_ACCESSOR: Provider={
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(()=> SwitchComponent),
  multi:true
}
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {
  private onCnahge = (value: any)=>{}

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  writevalue(fn: any):void{

  }



  state = 'off'
  setState(State: string ){
    this.state = State
    this.onCnahge(this.state)
  }



}
