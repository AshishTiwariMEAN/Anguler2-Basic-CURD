import {
    Injectable
} from '@angular/core';

@Injectable()
export class StudentsService {

    constructor() { }

    /**
     * This service we have used to fetch all student detail.
     */
    getStudents() {
        if (localStorage.getItem('students')) {
            return JSON.parse(localStorage.getItem('students'));
        } else {
            return "Failed";
        }
    }

    /**
     * This service we have used to add/update student detail.
     */
    addStudent(data) {
        if (data) {
            if (data.id != undefined || data.id != null) {
                let studentsList = JSON.parse(localStorage.getItem('students'));
                studentsList.splice(data.id, 1);
                studentsList.push(data);
                localStorage.setItem('students', JSON.stringify(studentsList));
            } else {
                let studentsList = JSON.parse(localStorage.getItem('students'));
                if (studentsList == null || studentsList == undefined || studentsList.length == 0) {
                    studentsList = [];
                    studentsList.push(data);
                    localStorage.setItem('students', JSON.stringify(studentsList));
                } else {
                    studentsList.push(data);
                    localStorage.setItem('students', JSON.stringify(studentsList));
                }
                return "Success";
            }
        } else {
            return "Failed";
        }
    }

    /**
     * This service we have used to delete student detail.
     */
    deleteStudent(index) {
        if (localStorage.getItem('students')) {
            let studentsList = JSON.parse(localStorage.getItem('students'));
            studentsList.splice(index, 1);
            localStorage.setItem('students', JSON.stringify(studentsList));
            return JSON.parse(localStorage.getItem('students'));
        } else {
            alert("No Data Available");
            return "Failed";
        }
    }

    /**
     * This service we have used to fetch specific student detail.
     */
    getStudent(index) {
        if (localStorage.getItem('students')) {
            let studentsList = JSON.parse(localStorage.getItem('students'));
            return studentsList[index];
        } else {
            alert("No Data Available");
            return "Failed";
        }
    }
}