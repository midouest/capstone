import { Component, Input, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { Document } from './file.service';

@Component({
  selector: 'title-editor',
  templateUrl: './title-editor.component.html'
})
export class TitleEditorComponent implements AfterViewInit {
  @Input() document: Document;

  @ViewChildren('titleEdit')
  titleEdits: QueryList<HTMLInputElement>;

  editing: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.titleEdits.changes.subscribe((els: QueryList<ElementRef>) => {
      let el = els.first;
      if (el !== undefined) {
        el.nativeElement.focus();
      }
    });
  }

  editTitle() {
    this.editing = true;
  }

  titleChanged(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === "Escape") {
      this.editing = false;
    }
  }
}