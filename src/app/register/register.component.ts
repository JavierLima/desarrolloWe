import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonsService} from '../persons.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    password: new FormControl('', [Validators.required,Validators.maxLength(255),Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required, Validators.email,Validators.maxLength(50)]),
    init_date: new FormControl(''),
    user_type: new FormControl('', [Validators.required,Validators.min(1),Validators.max(3)])
  });

  constructor(private personsService: PersonsService, private router: Router) { }

  onSubmit() {
    var actual_date = new Date().toISOString();
    console.log(actual_date);
    this.userForm.controls['init_date'].setValue(actual_date);
    this.personsService.postUser(this.userForm.value).subscribe(
      (user) => {
        console.log('User created: ' + user);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
