import { bounceOutLeftAnimation, fadeInAnimation } from './animations';
import { BadInput } from './../common/validators/bad-input';
import { throwError } from 'rxjs';
import { NotFoundError } from './../common/validators/not-found-error';
import { AppError } from './../common/validators/app-error';
import { PostService } from './../services/post.service';
import { Posts } from './posts';
import { Component, OnInit } from '@angular/core';
import {
  trigger, transition, style, animate,
  useAnimation, query, animateChild
} from '@angular/animations';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        query('h1', [
          style({
            transform: 'translateY(-20px)'
          }),
          animate(1000)
        ])
      ])
    ]),
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1000ms',
            easing: 'ease-out'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])

  ]
})
export class PostsComponent implements OnInit {

  posts: Posts[];

  constructor(private service: PostService) {
  }


  /*  animation event callbacks */
  // animationStarted($event) {
  //   console.log('strt event: ', $event);

  // }
  // animationDone($event) {
  //   console.log('done event: ', $event);
  // }

  ngOnInit(): void {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response;
        console.log('data: ', this.posts);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value,
      body: 'this is bbody content' + input.value
    }
    input.value = '';
    this.service.createPosts(post)
      .subscribe(response => {
        console.log('res: ', response);
        post['id'] = response.id;
        this.posts.splice(0, 0, post)
        // this.posts = response;
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert('please check request..');
        }
        else throwError(error);
      }
      );
  }

  updatePost(post: any) {
    this.service.updatePosts(post)
      .subscribe(
        res => {
          console.log('put res: ', res);
        });
  }

  patchPost(post) {
    this.service.patchPosts(post)
      .subscribe(
        res => {
          console.log('patch res : ' + JSON.stringify(res));
        });
  }

  deletePost(post) {
    this.service.deletePosts(644343436)
      .subscribe(
        res => {
          let index = this.posts.indexOf(post)
          console.log('del data: ', index);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('this post has been deleted.');
          }
          else throwError(error);
        }
      );
  }
}
