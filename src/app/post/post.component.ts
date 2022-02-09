import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  foo:any
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public postService: PostsService,
    ) {
    }
  ngOnInit(): void{
    this.route.params.subscribe((params: Params)=>{
      console.log( this.postService.getById(parseInt(params.id, 10)))
      this.foo = this.postService.getById(parseInt(params.id, 10))
    })

  }
  loadBack(){
    this.router.navigate(['/posts', 44])
  }

}
