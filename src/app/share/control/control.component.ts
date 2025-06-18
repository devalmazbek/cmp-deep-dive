import { Component, ElementRef, HostListener, input, Input, inject, contentChild, ContentChild, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: "control",
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements OnInit, AfterViewInit, AfterContentInit {
  // @Input({required: true}) label!: string;
  // old version host
  // @HostListener('click') onClick() {
  //   console.log('test');
  // }

  @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  label = input.required<string>();
  private el = inject(ElementRef);
  

  // get content child element
  private controlSignal = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  ngOnInit(): void {
    console.log('control init')
    console.log(this.controlSignal()?.nativeElement);
    console.log(this.control?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('control after view init')
    console.log(this.controlSignal()?.nativeElement);
    console.log(this.control?.nativeElement);
  }

  ngAfterContentInit(): void {
    console.log('control after content init')
    console.log(this.controlSignal()?.nativeElement);
    console.log(this.control?.nativeElement);
  }


  onClick() {
    console.log('click');
    console.log(this.el)
  }
}
