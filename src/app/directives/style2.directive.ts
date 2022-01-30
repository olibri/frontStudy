import { isLoweredSymbol } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle2]'
})
export class Style2Directive {
  @Input('appStyle2') color =''
  @Input() fontWeight = "normal" 

  constructor(private el:ElementRef, private r: Renderer2)
  {
    this.r.setStyle(this.el.nativeElement,  'color',  'green')
  }


  @HostListener('click' , ['$event']) onClick(event: Event){
    console.log(event)
  }

  @HostListener('mouseenter') OnEnter(){
    this.r.setStyle(this.el.nativeElement,  'color',  this.color)
    this.r.setStyle(this.el.nativeElement,  'fontWeight',  this.fontWeight)


  }
  @HostListener ('mouseleave') Onleave()
  {
    this.r.setStyle(this.el.nativeElement,  'color',  this.color)
    this.r.setStyle(this.el.nativeElement,  'fontWeight',  null)


  }
}



