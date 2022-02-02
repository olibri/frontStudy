  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import {Subject, Subscription} from 'rxjs'
  // import { DataService } from './services/data.service';
  import {delay} from 'rxjs/operators'
  export interface toDo
  {
    comp: boolean;
    title: string;
    id: number ;
  }
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {

    toDos: toDo[] = []
    todoTitle =''
    loading = false;
    constructor(private http: HttpClient){

  }
  ngOnInit(): void {
  this.fetch()

  }
  addToDo()
  {
    if(!this.todoTitle.trim)
  {
    return
  }
    const newtodo: toDo={
    title: this.todoTitle,
    comp:false,
      id: 0
  }

  this.http.post<toDo>('https://jsonplaceholder.typicode.com/todos',newtodo)
      .subscribe(tod=>{
      console.log(tod)
      this.toDos.push(tod)
      this.todoTitle = ''
    })
  }

  fetch()
  {
    this.loading= true;

    this.http.get<toDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1000))
      .subscribe(respons=> {
        this.toDos = respons
        this.loading = false;
      })
  }
  deleteSome(id:number){
    this.http.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .subscribe(()=>{
      this.toDos = this.toDos.filter(t=> t.id !== id)
    })
  }
 }


