import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

import { FileService, DocumentRecord } from './file.service';

@Component({
  selector: 'reference-search',
  templateUrl: './reference-search.component.html'
})
export class ReferenceSearchComponent {
  @Output() referenceSelected = new EventEmitter<string>();

  search = (text$: Observable<string>) =>
    text$
      .distinctUntilChanged()
      .map(term => term.length < 1 ? [] 
        : this.files.allFiles.filter(v => new RegExp(term, 'gi').test(v.title)).splice(0, 10))

  formatter = (file: DocumentRecord) => file.title;

  constructor(public files: FileService) { }

  itemSelected(event: NgbTypeaheadSelectItemEvent) {
    this.referenceSelected.emit(event.item);
  }
}