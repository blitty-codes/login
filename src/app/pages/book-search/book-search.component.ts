import { CallsService } from '../../services/calls.service';
import { Book } from '../../interfaces/book';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private calls: CallsService, private router: Router) { }

  book: Book;
  books: Book[];

  ngOnInit() {
    this.calls.tokenValidation(localStorage.getItem('token')).subscribe((response) => { }, (error) => {
      this.router.navigateByUrl('/');
    });
    this.calls.getBooks().subscribe((data: Book[]) => { this.books = data; });
  }

  handleSearch(value: string) {
    this.filtroValor = value;
  }

  handleType(value: string) {
    this.filterType = value;
  }

  filterType: string;
  filtroValor: string;
}
