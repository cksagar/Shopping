import { SpaceValidator } from './../common/validators/spacevalidator';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpForm;
  // signUpForm = new FormGroup({
  //   name: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     SpaceValidator.cannotContainSpace]),
  //   account: new FormGroup({
  //     username: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3),
  //       SpaceValidator.cannotContainSpace],
  //       SpaceValidator.shouldBeUnique),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(6),
  //       SpaceValidator.cannotContainSpace])
  //   }),
  //   topics: new FormArray([])
  // });


  constructor(private fb: FormBuilder) {

    this.signUpForm =  fb.group({
      name: ['',
        [Validators.required,
        Validators.minLength(3),
        SpaceValidator.cannotContainSpace]],
      account: fb.group({
        username: ['', [
          Validators.required,
          Validators.minLength(3),
          SpaceValidator.cannotContainSpace],
          SpaceValidator.shouldBeUnique],
          password: ['', [
            Validators.required,
            Validators.minLength(6),
            SpaceValidator.cannotContainSpace]]
      }),
      topics: fb.array([])
    });
  }

  ngOnInit(): void {
  }


  get name() {
    return this.signUpForm.get('name');
  }
  get password() {
    return this.signUpForm.get('account.password');
  }
  get topics() {
    return this.signUpForm.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    (this.topics as FormArray)
      .push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  login() {
    // this.signUpForm.setErrors({
    //   invalidLogin: true
    // })
  }

}
