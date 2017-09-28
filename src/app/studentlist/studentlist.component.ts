import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

/**
 * Metedata
 */
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentList: any;
  constructor(private studentsService: StudentsService) { }

  /**
  * Firt API invoke once first page load.
  */
  ngOnInit() {
    this.getStudentData();
  }


  getStudentData() {
    this.studentList = this.studentsService.getStudents();
  }

  /**
  * Delete student API.
  */
  deleteStudent(index) {
    this.studentList = this.studentsService.deleteStudent(index);
  }
}
