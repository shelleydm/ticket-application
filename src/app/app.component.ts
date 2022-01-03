import { Component } from '@angular/core';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { OnInit } from '@angular/core';
import { TicketService, TicketData } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'part2';

  tickets: TicketData[] = [];
  constructor(public ticketServer: TicketService) {}

  ngOnInit(): void {
    this.tickets = this.ticketServer.getTickets();
  }
}
