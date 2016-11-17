import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Document } from './file.service';

@Component({
  selector: 'reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.css'],
})
export class ReferenceDetailComponent {
  @Input() document: Document;
  @Output() remove = new EventEmitter();

  constructor() { }

  toggleMinimized() {
    this.document.minimized = !this.document.minimized;
  }

  removeReference() {
    this.document.minimized = false;
    this.remove.emit();
  }
}