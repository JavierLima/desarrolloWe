import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonsService} from '../persons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private personsService: PersonsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.personsService.loginUser(this.userLoginForm.value).subscribe(
      (user) => {
        console.log('User logged: ' + user);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
