import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UserModel} from './user-model';
import {BehaviorSubject, Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  public loggedUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('loggedUser')));

  constructor(private http: HttpClient) {
  }

  setLoggedUserSubject(user : UserModel){
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.loggedUserSubject.next(user);
  }
  getLoggedUserSubject(){
    return this.loggedUserSubject;
  }
  getAllPerson() {
    return this.http.get('http://localhost:80/user');
  }

  getUser(id: string) {
    return this.http.get('http://localhost:80/user/' + id);
  }

  deleteUser(id: string) {
    return this.http.delete('http://localhost:80/user/' + id);
  }

  putUser(id: string, body:UserModel) {
    return this.http.put('http://localhost:80/user/' + id, body);
  }

  postUser(user: UserModel) {
    return this.http.post<UserModel>('http://localhost:80/register', user)
      .map(user => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.loggedUserSubject.next(user);
      });
  }

  loginUser(body) {

    return this.http.post<UserModel>('http://localhost:80/login', body)
      .map(user => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.loggedUserSubject.next(user);
      });
  }


}





