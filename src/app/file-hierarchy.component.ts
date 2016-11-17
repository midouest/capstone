import { Component, OnInit } from '@angular/core';

import { FileService } from './file.service';

@Component({
  selector: 'file-hierarchy',
  templateUrl: './file-hierarchy.component.html',
  styleUrls: ['./file-hierarchy.component.css'],
})
export class FileHierarchyComponent implements OnInit {
  get fileTree() {
    return this.files.fileTree;
  }

  constructor(public files: FileService) { }

  ngOnInit() { }

  toggleFolder(index: number) {
    this.files.toggleFolder(index);
  }
  
  selectFile(parentIndex: number, index: number) {
    this.files.toggleFile(parentIndex, index);
  }
}