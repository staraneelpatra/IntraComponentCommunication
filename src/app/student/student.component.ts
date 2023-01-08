import { Component, Input } from '@angular/core';
import { Teacher } from '../teachers/teachers.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() teacher: Teacher;
  @Input('principle') principleName: string;
 
  constructor() { }
 
  ngOnInit() {
  }
}
