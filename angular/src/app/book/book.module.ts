import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookComponent } from './book.component';
import { LocalizationModule } from '@abp/ng.core';
import { BookRoutingModule } from 'book-routing.module';

@NgModule({
  declarations: [],
  imports: [
    BookRoutingModule,
    BookComponent,

  ]
})
export class BookModule { }

