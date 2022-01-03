import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchFilterPipe } from './filter.pipe'; //Credit for tutorial: https://remotestack.io/angular-custom-filter-search-pipe-example-tutorial/

import { AppComponent } from './app.component';
import { EditComponent } from './edit.component';
import { NewComponent } from './new.component';
import { PageNotFoundComponent } from './pagenotfound.component';

import { TicketsComponent } from './tickets.component';
import { TicketService } from './ticket.service';

const myRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tickets' },
  { path: 'tickets', component: TicketsComponent },
  { path: 'edit', component: EditComponent },
  { path: 'new', component: NewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    SearchFilterPipe,
    AppComponent,
    EditComponent,
    NewComponent,
    TicketsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [TicketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
