import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketService, TicketData } from './ticket.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'tickets-table',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent {
  tickets: TicketData[] = [];
  searchText: string = '';

  constructor(public ticketServer: TicketService) {}
  ngOnInit(): void {
    this.tickets = this.ticketServer.getTickets();
  }

  deleteTicket(deleteID: number) {
    let confirmDelete = confirm('Do you really want to delete this ticket?');
    if (confirmDelete) {
      let index: number = 0;
      for (var ticket of this.tickets) {
        if (deleteID == ticket.ID) {
          this.tickets.splice(index, 1);
        }
        index++;
      }
    }
  }
}
