import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  ngOnInit(): void {
  }

  submit(){

    console.log(this.form)
    const fromData = this.form.value
    console.log(fromData)
    this.form.reset();
  }
  setCapital(){
    const cityMap: any={
      ru: "Moscow",
      ua:"Kyiv",
      by: "Minsk"
    }
    const cityKey = this.form?.get('address')?.get('country')?.value
    let city = cityMap[cityKey]

    this.form.patchValue({
      address:{city}
    })
  }
  AddSkill(){
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills'))
    (this.form.get('skills')as FormArray).push(control);
  }


  // constructor(public counter : DataServices,
  //   public localConterServices : LocalCounterService)
  // {

  // }
}
