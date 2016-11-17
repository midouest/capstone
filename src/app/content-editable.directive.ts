import {
  Directive,
  OnChanges, 
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {  } from '@angular/forms';

@Directive({
  selector: '[contentEditableModel]',
  host: {
    '(focusout)': 'onFocusOut()',
  },
})
export class ContentEditableDirective implements OnChanges {
  @Input('contentEditableModel') model: any;
  @Output('contentEditableModelChange') update = new EventEmitter();

  constructor(private elRef: ElementRef) { }

  ngOnChanges(changes) {
    this.elRef.nativeElement.innerText = this.model;
  }

  onFocusOut() {
    let value = this.elRef.nativeElement.innerText;
    this.update.emit(value);
  }
}