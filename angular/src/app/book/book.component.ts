import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { BookService, BookDto } from '@proxy/books';
import { LocalizationModule } from '@abp/ng.core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  providers: [ListService],
  imports: [LocalizationModule, NgxDatatableModule], // Import LocalizationModule and NgxDatatableModule here
})
export class BookComponent implements OnInit {
  book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;

  constructor(public readonly list: ListService, private bookService: BookService) { }

  ngOnInit() {
    const bookStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book = response;
      console.log(this.book.items); // Debug: Check if data is being populated
    });
  }
}
