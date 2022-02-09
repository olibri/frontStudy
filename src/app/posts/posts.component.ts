import { ActivatedRoute } from '@angular/router';
import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showId = false;

  constructor(public postsService: PostsService
    ,public route : ActivatedRoute
    ) {}
    ngOnInit(){
      this.route.queryParams.subscribe((p)=>{
      this.showId = !!p.showId
      })
    }
}
