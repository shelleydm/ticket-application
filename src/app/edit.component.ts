import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketService, TicketData } from './ticket.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html',
})
export class EditComponent {
  tickets: TicketData[] = [];
  id: number = 0;
  subject: string = '';
  category: string = '';
  assignee: string = '';
  priority: string = '';
  status: string = '';
  comment: string = '';

  formSubmitted: boolean = false;
  formSuccess: boolean = false;

  constructor(public ticketServer: TicketService) {}
  ngOnInit(): void {
    this.tickets = this.ticketServer.getTickets();
  }
  editFormSubmit() {
    this.formSubmitted = true;
    if (this.validateForm()) {
      for (var ticket of this.tickets) {
        if (this.id == ticket.ID) {
          ticket.subject = this.subject;
          ticket.category = this.category;
          ticket.assignee = this.assignee;
          ticket.priority = this.priority;
          ticket.status = this.status;
          ticket.comment = this.comment;
          this.formSubmitted = false;
          this.formSuccess = true;
        }
      }
    }
  }
  selectedID() {
    for (var ticket of this.tickets) {
      if (this.id == ticket.ID) {
        this.subject = ticket.subject;
        this.category = ticket.category;
        this.assignee = ticket.assignee;
        this.priority = ticket.priority;
        this.status = ticket.status;
        this.comment = ticket.comment;
      }
    }
  }

  validateForm(): boolean {
    if (
      this.subject === '' ||
      this.category === '' ||
      this.assignee === '' ||
      this.priority === '' ||
      this.status === ''
    ) {
      return false;
    }
    return true;
  }
}
