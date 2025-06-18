import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

type Status = 'online' | 'offline' | 'unknown';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})



export class ServerStatusComponent implements OnInit, OnDestroy  {
    currentStatus: Status = 'offline';
    private intervalId?: ReturnType<typeof setInterval>;

    // new versions
    // private destroyRef = inject(DestroyRef);
    
    
    constructor() {
      console.log(this);
    }

    // new versions
    // ngOnInit() {
    //   const intervalId = setInterval(() => {
    //     const randomStatus = Math.random();
    //     if(randomStatus < 0.5) {
    //       this.currentStatus = 'online';
    //     } else if(randomStatus < 0.9) {
    //       this.currentStatus = 'offline';
    //     } else {
    //       this.currentStatus = 'unknown';
    //     }
    //   }, 1500);

    //   this.destroyRef.onDestroy(() => {
    //     clearInterval(intervalId);
    //   })
    // }

    ngOnInit() {
      this.intervalId = setInterval(() => {
        const randomStatus = Math.random();
        if(randomStatus < 0.5) {
          this.currentStatus = 'online';
        } else if(randomStatus < 0.9) {
          this.currentStatus = 'offline';
        } else {
          this.currentStatus = 'unknown';
        }
      }, 1500);
    }

    ngAfterViewInit() {
      console.log('after view init');
    }
 
    // ngAfterViewChecked() {
    //   console.log('after view checked');
    // }

    // new version
    ngOnDestroy() {
      console.log('on destroy');
      clearInterval(this.intervalId);
    }
}
