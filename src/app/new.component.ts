import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { TicketService, TicketData } from './ticket.service';
import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  templateUrl: './new.component.html',
})
export class NewComponent {
  tickets: TicketData[] = [];
  newId: number = 0;
  newSubject: string = '';
  newCategory: string = '';
  newAssignee: string = '';
  newPriority: string = '';
  newStatus: string = '';
  newComment: string = '';

  validID = this.validateID(this.newId);
  formSubmitted: boolean = false;
  formSuccess: boolean = false;

  constructor(public ticketServer: TicketService) {}
  ngOnInit(): void {
    this.tickets = this.ticketServer.getTickets();
  }
  newFormSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (this.validateForm()) {
      this.tickets.push(
        this.newTicket(
          this.newId,
          this.newSubject,
          this.newCategory,
          this.newAssignee,
          this.newPriority,
          this.newStatus,
          this.newComment
        )
      );
      form.reset();
      this.formSubmitted = false;
      this.formSuccess = true;
      this.newId = 0;
      this.newSubject = '';
      this.newCategory = '';
      this.newAssignee = '';
      this.newPriority = '';
      this.newStatus = '';
      this.newComment = '';
    }
  }

  newTicket(
    newID: number,
    newSubject: string,
    newCategory: string,
    newAssignee: string,
    newPriority: string,
    newStatus: string,
    newComment: string
  ) {
    let ticketObject = {
      ID: newID,
      subject: newSubject,
      category: newCategory,
      assignee: newAssignee,
      priority: newPriority,
      status: newStatus,
      comment: newComment,
    };

    return ticketObject;
  }

  validateID(formID: number): boolean {
    for (var ticket of this.tickets) {
      if (formID == ticket.ID) {
        return false;
      }
    }
    return true;
  }

  validateForm(): boolean {
    if (
      !this.validID ||
      this.newSubject === '' ||
      this.newCategory === '' ||
      this.newAssignee === '' ||
      this.newPriority === '' ||
      this.newStatus === ''
    ) {
      return false;
    }
    return true;
  }
}
