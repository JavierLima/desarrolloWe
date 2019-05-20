import { Component, OnInit } from '@angular/core';
import {PersonsService} from '../persons.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../user-model';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser ;
  consult ;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(3)]),
    mail: new FormControl('', [Validators.required, Validators.email,Validators.maxLength(50)]),
    user_type: new FormControl('', [Validators.required,Validators.min(1),Validators.max(3)])
  });

  constructor(private personsService: PersonsService, private router: Router) { }

  ngOnInit() {
    this.personsService.loggedUserSubject.asObservable().subscribe(
      user => this.loggedUser = user
    );
  }

  logOut(){
    if(this.loggedUser){
      this.loggedUser = null;
      localStorage.removeItem('loggedUser');
    }
  }
  editProfile(){
    this.personsService.putUser(this.loggedUser.user_id,this.userForm.value).subscribe(
        user => {this.loggedUser = <UserModel> user;
        this.personsService.setLoggedUserSubject( <UserModel> user);
          this.userForm.reset();
          },
        error=> { console.log(error)}
    )


  }

}
