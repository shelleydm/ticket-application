import { Injectable } from '@angular/core';

export interface TicketData {
  ID: number;
  subject: string;
  category: string;
  assignee: string;
  priority: string;
  status: string;
  comment: string;
}

@Injectable({ providedIn: 'root' })
export class TicketService {
  tickets: TicketData[];

  constructor() {
    this.tickets = [];
    this.initialiseData();
  }

  getTickets() {
    return this.tickets;
  }

  initialiseData() {
    this.tickets.push(
      this.newTicket(
        97539,
        'Issue',
        'Billing',
        'Barry',
        'Low',
        'Open',
        'Description'
      )
    );
    this.tickets.push(
      this.newTicket(
        80313,
        'Advertisement',
        'Marketing',
        'Sally',
        'High',
        'Close',
        'Description'
      )
    );
    this.tickets.push(
      this.newTicket(
        40177,
        'Code error',
        'Developing',
        'Jill',
        'Medium',
        'Solved',
        ''
      )
    );
    this.tickets.push(
      this.newTicket(
        26782,
        'Deployment',
        'Developing',
        'Bob',
        'Low',
        'Open',
        ''
      )
    );
    this.tickets.push(
      this.newTicket(
        39619,
        'Targets',
        'Marketing',
        'Sally',
        'Medium',
        'Solved',
        'Description'
      )
    );
    this.tickets.push(
      this.newTicket(62001, 'Error', 'Billing', 'Jill', 'High', 'Close', '')
    );
    this.tickets.push(
      this.newTicket(
        20759,
        'Payments',
        'Billing',
        'Sophie',
        'Medium',
        'Open',
        'Description'
      )
    );
    this.tickets.push(
      this.newTicket(
        40288,
        'Information',
        'Marketing',
        'William',
        'Low',
        'Solved',
        ''
      )
    );
    this.tickets.push(
      this.newTicket(97435, 'Servers', 'Developing', 'Jane', 'High', 'Open', '')
    );
    this.tickets.push(
      this.newTicket(
        90067,
        'Email',
        'Billing',
        'Daniel',
        'Medium',
        'Close',
        'Description'
      )
    );
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
}
