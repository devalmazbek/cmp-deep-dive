import { Component } from '@angular/core';
import { ButtonComponent } from '../../../share/button/button.component';
import { ControlComponent } from "../../../share/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
