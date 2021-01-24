import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    getCourses() {
        return ['course 1', 'course 2', 'course 3'];
    }
}
