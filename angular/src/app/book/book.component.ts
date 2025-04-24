import { CoreModule, ListService, PagedResultDto } from '@abp/ng.core';
import { Component, NgModule, OnInit } from '@angular/core';
import { BookService, BookDto } from '@proxy/books';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { DatatableComponent } from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  imports: [
    ThemeSharedModule, CoreModule
  ],
  providers: [ListService, NgModule],
})
export class BookComponent implements OnInit {
  book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;

  constructor(public readonly list: ListService, private bookService: BookService) { }

  ngOnInit() {
    const bookStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book = response;
    });
  }
}
