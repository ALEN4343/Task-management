import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.appHighlight === 'High') {
      this.el.nativeElement.style.border = '2px solid red';
      this.el.nativeElement.style.backgroundColor = '#ffe6e6';
    }

    if (this.appHighlight === 'Medium') {
      this.el.nativeElement.style.border = '2px solid orange';
      this.el.nativeElement.style.backgroundColor = '#fff3e0';
    }
  }
}
