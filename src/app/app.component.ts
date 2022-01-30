import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServices } from './services/data.services';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit {
  form: FormGroup
  constructor(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)
      ])
    })
  }

  ngOnInit(): void {
  }

  submit(){

    console.log(this.form)
    const fromData = this.form.value
    console.log(fromData)

  }



  // constructor(public counter : DataServices,
  //   public localConterServices : LocalCounterService)
  // {

  // }
}
