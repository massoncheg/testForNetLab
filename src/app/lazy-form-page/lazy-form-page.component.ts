import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from '../form-service.service';

export interface UserForm {
  name: string;
  email: string;
  topic: string;
  message: string;
}

@Component({
  selector: 'app-lazy-form-page',
  templateUrl: './lazy-form-page.component.html',
  styleUrls: ['./lazy-form-page.component.css']
})
export class LazyFormPageComponent implements OnInit {

  constructor(
    private router: Router,
    private formService: FormServiceService
  ) { }

  formGroup!: FormGroup;
  form!: UserForm;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'topic': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
    if (this.router.url === '/form/edit') {
      this.form = this.formService.getForm();
      this.formGroup.get('name')?.setValue(this.form.name)
      this.formGroup.get('email')?.setValue(this.form.email)
      this.formGroup.get('topic')?.setValue(this.form.topic)
      this.formGroup.get('message')?.setValue(this.form.message)

      this.formLeft.name  = true;
      this.formLeft.email = true;
      this.formLeft.topic  = true;
      this.formLeft.message = true;
    }
  }


  clearForm() {
    this.formGroup.reset();
    this.formService.setIsFormFilled(false)
  }
  sendFormOrValidate() {
    if (this.formGroup.valid) {
      this.formService.setForm(this.formGroup.value)
      this.formService.setIsFormFilled(true)
      this.router.navigate([''])
    }
    else{
      this.formLeft.name  = true;
      this.formLeft.email = true;
      this.formLeft.topic  = true;
      this.formLeft.message = true;
      this.formGroup.markAllAsTouched()
    }
  }

  formLeft = {
    name: false,
    email: false,
    topic: false,
    message: false
  }

  get name() {
    return this.formGroup.get('name');
  }
  get email() {
    return this.formGroup.get('email');
  }
  get topic() {
    return this.formGroup.get('topic');
  }
  get message() {
    return this.formGroup.get('message');
  }
}

