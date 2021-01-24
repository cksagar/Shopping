import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  id: number;
  ngOnInit() {

    // // use this if you dont want to repeat a child route
    //  this.id = +this.route.snapshot.paramMap.get('id');

    // use this when your child route is occurring again n again.
    this.route.paramMap
      .subscribe(
        params => {
          // console.log(params);

          this.id = +params.get('id');
          // console.log("id: ", this.id);
        }
      );
  }

  // avigate manually by using router 
  onBackPress() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
