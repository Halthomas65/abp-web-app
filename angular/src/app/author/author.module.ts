import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
  imports: [
    SharedModule,
    AuthorRoutingModule,
    NgbDatepickerModule,
    NgxDatatableModule,
    CoreModule,
    ThemeSharedModule,
    AuthorComponent,
  ],
})
export class AuthorModule { }
