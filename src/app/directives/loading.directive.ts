import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective implements OnInit {

  @Input() appLoading = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.appLoading){
      this.el.nativeElement.style.display = 'block';
    }else{
      this.el.nativeElement.style.display = 'none';
    }
  }

}
