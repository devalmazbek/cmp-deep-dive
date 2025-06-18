export interface Tickets {
    id: string;
    title: string;
    ticketText: string;
    status: 'open' | 'close';
}

export interface TicketData {
    title: string;
    ticketText: string;
}