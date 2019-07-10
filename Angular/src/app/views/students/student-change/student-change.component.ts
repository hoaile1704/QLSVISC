import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../shared/student.service';
import { PnotifyService } from '../../../shared/pnotify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-change',
  templateUrl: './student-change.component.html',
  styleUrls: ['./student-change.component.scss']
})
export class StudentChangeComponent implements OnInit {

  constructor(private service: StudentService, private pnotify: PnotifyService) { }
  parseDate(): Date {

    if (this.service.formData.BIRTH_DAY != null) {
      // console.log(new Date(this.service.formData.BIRTH_DAY));
        return new Date(this.service.formData.BIRTH_DAY);
    }
    return null;
}
  ngOnInit() {
    this.service.resetForm();
  }
  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.putStudent(form.value).subscribe(res => {
      this.pnotify.showSuccessUp(this.service.formData.STU_ID);
      this.service.refreshList();
  });
  }

}