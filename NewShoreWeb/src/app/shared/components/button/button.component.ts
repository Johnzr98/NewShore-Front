import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() textValue = 'Search';
  @Output() onSubmit = new EventEmitter<void>();

  constructor() { }

  submit(){
    this.onSubmit.emit();
  }

}
