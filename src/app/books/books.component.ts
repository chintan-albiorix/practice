import { Component, OnInit } from '@angular/core';
import { Books } from '../core/interface/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  name:string = 'Angular';
  books: Books[] = [
    {
      name: 'Book 1',
      author: 'Author 1',
      img: 'https://png.pngtree.com/template/20210908/ourlarge/pngtree-creative-and-realistic-book-dummy-image_633548.jpg',
      price: 110
    },
    {
      name: 'Book 2',
      author: 'Author 2',
      img: 'https://png.pngtree.com/template/20210908/ourlarge/pngtree-creative-and-realistic-book-dummy-image_633548.jpg',
      price: 110
    },
    {
      name: 'Book 3',
      author: 'Author 3',
      img: 'https://png.pngtree.com/template/20210908/ourlarge/pngtree-creative-and-realistic-book-dummy-image_633548.jpg',
      price: 110
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
