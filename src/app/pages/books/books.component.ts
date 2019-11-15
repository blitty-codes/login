import { CallsService } from '../../services/calls.service';
import { Book } from '../../interfaces/book';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private calls: CallsService, private router: Router) { }

  book: Book;
  books: Book[];

  ngOnInit() {
  }

  getBooks() {
    this.calls.tokenValidation(localStorage.getItem('token')).subscribe((response) => {}, (error) => {
      this.router.navigateByUrl('/');
    });
    this.calls.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
