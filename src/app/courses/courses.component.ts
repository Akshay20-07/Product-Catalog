import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {Courses} from '../mock-courses';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  //course : Course={id:1,name:"Angular"}
  courses = Courses;
  selectCourse:Course;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(course:Course):void{
    this.selectCourse=course;
  }
}
