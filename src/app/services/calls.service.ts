import { User } from '../interfaces/user';
import { Book } from '../interfaces/book';

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

  // book search
  bookTitle(title: Book) {
    return this.http.post(`${this.adress}title`, title);
  }

  bookISBN(ISBN: Book) {
    return this.http.post(`${this.adress}ISBN`, ISBN);
  }

  bookAuthor(author: Book) {
    return this.http.post(`${this.adress}author`, author);
  }

  bookPrice(price: Book) {
    return this.http.post(`${this.adress}price`, price);
  }

  bookPublisher(publisher: Book) {
    return this.http.post(`${this.adress}publisher`, publisher);
  }

  bookDescription(description: Book) {
    return this.http.post(`${this.adress}description`, description);
  }

  bookPDate(publicationDate : Book) {
    return this.http.post(`${this.adress}publicationDate `, publicationDate );
  }

  // validation
  tokenValidation(token: string) {
    return this.http.post(`${this.adress}tokenValidation`, { token });
  }
}
