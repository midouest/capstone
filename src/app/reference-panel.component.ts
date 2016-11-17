import { Component } from '@angular/core';

import { DocumentRecord } from './file.service';
import { ReferenceService } from './reference.service';

@Component({
  selector: 'reference-panel',
  templateUrl: './reference-panel.component.html',
})
export class ReferencePanelComponent {
  
  constructor(public references: ReferenceService) { }

  addReference(file: DocumentRecord) {
    this.references.addReference(file);
  }
}