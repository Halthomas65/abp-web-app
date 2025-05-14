import { ListService, PagedResultDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { BookService, BookDto, bookTypeOptions } from '@proxy/books';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbDatepickerModule, NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  providers: [
    ListService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    NgxDatatableModule,
    ThemeSharedModule,
    NgbDatepickerModule
  ]
})
export class BookComponent implements OnInit {
  book: PagedResultDto<BookDto> = { items: [], totalCount: 0 };

  form: FormGroup;

  bookTypes = bookTypeOptions;

  isModalOpen = false;

  constructor(
    public readonly list: ListService,
    private readonly bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeBookList();
  }

  createBook(): void {
    this.buildForm();
    this.isModalOpen = true;
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      type: [null, [Validators.required]],
      publishDate: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.bookService.create(this.form.value).subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
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
