import { Injectable } from '@angular/core';
import { UserForm } from './lazy-form-page/lazy-form-page.component';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  isFormFilled: boolean = false;

  userFormData: UserForm = {
    name: "",
    email: "", 
    topic: "",
    message: ""
  }

  
  getForm(){
    return this.userFormData
  }
  
  setForm(data: UserForm){
    this.userFormData.name = data.name;
    this.userFormData.email = data.email;
    this.userFormData.topic = data.topic;
    this.userFormData.message = data.message;
  }

  clearForm(){
    this.userFormData.name = '';
    this.userFormData.email = '';
    this.userFormData.topic = '';
    this.userFormData.message = '';
    this.isFormFilled = false;
  }

  getIsFormFilled(){
    return this.isFormFilled
  }
  setIsFormFilled(payload:boolean){
    this.isFormFilled = payload;
  }

  constructor() { }
}
