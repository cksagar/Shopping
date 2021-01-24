import { flyInOut } from './../posts/animations';
import { Follower } from './follower';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
  animations: [
    flyInOut
  ]
})
export class GithubFollowersComponent implements OnInit {
  followers: Follower[];

  constructor(private service: GithubFollowersService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    let page = this.route.snapshot.queryParamMap.get('order');
    console.log('ordervalue: ', page);

    this.route.queryParamMap.subscribe(
      params => {
        console.log('params : ', params);
      }
    );

    this.service.getFollowers()
      .subscribe(followers => this.followers = followers);
  }
}
