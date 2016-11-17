import { Component } from '@angular/core';

import { FileService, FileType } from './file.service';

@Component({
  selector: 'files-panel',
  templateUrl: './files-panel.component.html'
})
export class FilesPanelComponent {
  constructor(public files: FileService) { }

  addFile(fileType: FileType) {
    this.files.addFile(fileType);
  }
}