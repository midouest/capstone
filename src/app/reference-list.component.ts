import { Component, Input } from '@angular/core';

import { Document } from './file.service';
import { ReferenceService } from './reference.service';

@Component({
  selector: 'reference-list',
  templateUrl: './reference-list.component.html'
})
export class ReferenceListComponent {
  get documents(): Array<Document> {
    return this.references.documents;
  }

  constructor(public references: ReferenceService) { }

  removeReference(index: number) {
    this.references.removeReference(index);
  }
}