import { User } from '../interfaces/user'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private http: HttpClient) { }

  private adress = 'http://localhost:3000/';

  getUsers() {
    return this.http.get(`${this.adress}registers`);
  }

  getBooks() {
    return this.http.get(`${this.adress}books/getBooks`);
  }

  login(user: User) {
    return this.http.post(`${this.adress}loginUser`, user);
  }

  register(user: User) {
    return this.http.post(`${this.adress}addRegister`, user);
  }

  tokenValidation(token: string) {
    return this.http.post(`${this.adress}tokenValidation`, { token });
  }
}
