import { CourseService } from './services/course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // firstName;
  comment;
  tweet = { 
    body: '...',
    likesCount: 10,
    isLiked: true
  }
  


  title = 'Shopping';
  email = 'ck@gmail.com';
  rev: any;

  courses;
  isTrue = false;
  text = `Lorem, ipsum dolor sit amet consectetur adipisicin g elit.
            Assumenda natus repellendus dolorem,
            vel qui voluptatum possimus eos nemo veniam rem in odit mollitia
            officia at aperiam odio? Dolorum, iure quod`;

  constructor(private coursesService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  tec(value) {
    this.rev = value;
    console.log(' event occued from child : ', this.rev);
  }


  onSave(obj) {
    console.log('button clicked with value : ', obj);
  }
  onclick() {
    console.log('onclicked with value : ', this.email);
  }
  onDivSave(obj) {
    console.log('div clicked with value : ', obj);
  }
  onPSave(obj) {
    console.log('p clicked with value : ', obj);
  }

}
