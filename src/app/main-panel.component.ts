import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { FileService, Document } from './file.service';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html',
})
export class MainPanelComponent {

  get isFileSelected(): boolean {
    return this.files.selectedFile !== null;
  }

  get selectedFile(): Document {
    return this.files.selectedFile;
  }

  constructor(public files: FileService) { }
}