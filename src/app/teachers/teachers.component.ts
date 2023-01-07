import { Component } from '@angular/core';
import { Teachers } from './teachers.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers = Teachers;
  principle = 'Principle';

  constructor() { }
 
  ngOnInit() {
  }
}
