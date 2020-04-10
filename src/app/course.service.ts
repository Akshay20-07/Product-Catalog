import { Injectable } from '@angular/core';
import{ Course} from './course';
import {Courses} from './mock-courses';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  getCourses(): Course[]{
    return Courses;
  }
  
  constructor() { }
}
