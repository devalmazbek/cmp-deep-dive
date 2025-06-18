import { Component, ElementRef, inject } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketData, Tickets } from './support-tickets.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
  host: {
    '(click)': 'onClick()'
  }
})
export class SupportTicketsComponent {
  tickets: Tickets[] = []; 
  private element = inject(ElementRef);

  onAddTicket({ticketText, title}: TicketData): void {
    const newTicketItem: Tickets = {
      id: new Date().toString(),
      title,
      ticketText,
      status: 'open'
    }

    this.tickets.push(newTicketItem);

    console.log(this.tickets);
  }

  onClick() {
    console.log(this.element);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket: Tickets) => {
      if(ticket.id === id) {
        return {...ticket, status: 'close'}
      }
      return ticket;
    })
  }

}
