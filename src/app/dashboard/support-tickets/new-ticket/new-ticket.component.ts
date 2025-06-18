import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../share/button/button.component';
import { ControlComponent } from "../../../share/control/control.component";
import { FormsModule } from '@angular/forms';
import { TicketData, Tickets } from '../support-tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // old version
  @ViewChild('title') input?: ElementRef<HTMLInputElement>
  // old version
  // @Output() add = new EventEmitter<TicketData>();

// new version high 17.3

  add = output<TicketData>()

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')


  ngOnInit(): void {
    console.log('on init');
    console.log(this.form().nativeElement);
    console.log(this.input?.nativeElement);
    
  }

  ngAfterViewInit(): void {
    console.log('after init');
    console.log(this.input?.nativeElement);
    console.log(this.form().nativeElement);
  }

  


  onSubmit(title: string, ticketText: string) {
    const newTicket = { title, ticketText};

    this.add.emit(newTicket)

    this.form()?.nativeElement.reset();
  }
}
