import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { BookService, BookDto } from '@proxy/books';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  providers: [ListService], imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgxDatatableModule,
    ThemeSharedModule
  ]
})
export class BookComponent implements OnInit {
  book: PagedResultDto<BookDto> = { items: [], totalCount: 0 };

  isModalOpen = false;

  constructor(
    public readonly list: ListService,
    private readonly bookService: BookService
  ) { }

  ngOnInit(): void {
    this.initializeBookList();
  }

  createBook(): void {
    this.isModalOpen = true;
  }

  private initializeBookList(): void {
    const bookStreamCreator = (query) => this.bookService.getList(query);
    this.list.hookToQuery(bookStreamCreator).subscribe({
      next: (response) => {
        this.book = response;
        console.debug('Books loaded:', this.book.items); // Debug: Check if data is being populated
      },
      error: (err) => {
        console.error('Failed to load books:', err); // Handle errors gracefully
      },
    });
  }
}
