import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Tickets } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})

export class TicketComponent {
  @Input({required: true}) ticket!: Tickets;
  @Output() ticketClose = new EventEmitter<string>(); 
  
  // old version
  // detailVisible: boolean = false;

  detailVisible =signal<boolean>(false)

  onToggle() {
    this.detailVisible.update((visible) => !visible);
  }

  onTicketClose() {
    this.ticketClose.emit();
  }
}
