import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor() { }

  selections: any = ['title', 'ISBN', 'description', 'author', 'publisher', 'price', 'publicationDate'];

  ngOnInit() {
    this.type.valueChanges.subscribe(value => this.typeEmitter.emit(value));
  }

  type = new FormControl('')

  @Output('type') typeEmitter = new EventEmitter<string>();
}
