import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BooksComponent } from './pages/books/books.component';
import { BookSearchComponent } from './pages/book-search/book-search.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'search',
    component: BookSearchComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
