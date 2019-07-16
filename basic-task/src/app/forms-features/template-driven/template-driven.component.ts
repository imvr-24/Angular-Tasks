import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent  {

  @ViewChild('form', { static: false }) signUpForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  userSubmitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    console.log(this.signUpForm.controls);
    console.log(this.signUpForm.controls['gender']);
    this.signUpForm.form.patchValue({ userData: { username: suggestedName, email: 'veerareddy596@gmail.com' } });
    this.signUpForm.form.patchValue({ secret: 'pet', questionAnswer: 'Go to movie', gender: 'male' });

    console.log(this.signUpForm);
    console.log(this.signUpForm);

  }

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signUpForm.setValue({
  //     userData: {
  //       username: suggestedName,
  //       email: ''
  //     },
  //     secret: 'pet',
  //     questionAnswer : '',
  //     gender: 'male'
  //   });
  // }

  // Using Form Data.

  onSubmit() {
    this.userSubmitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    // this.signUpForm.onReset()
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(form.value);
  // }

}
