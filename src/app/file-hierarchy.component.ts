import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FileService } from './file.service';
import { RemoveFileComponent } from './remove-file.component';

@Component({
  selector: 'file-hierarchy',
  templateUrl: './file-hierarchy.component.html',
  styleUrls: ['./file-hierarchy.component.css'],
})
export class FileHierarchyComponent implements OnInit {
  get fileTree() {
    return this.files.fileTree;
  }

  constructor(public files: FileService, public modal: NgbModal) { }

  ngOnInit() { }

  toggleFolder(index: number) {
    this.files.toggleFolder(index);
  }
  
  selectFile(parentIndex: number, index: number) {
    this.files.toggleFile(parentIndex, index);
  }

  removeFile(parentIndex: number, index: number, event: Event) {
    event.stopPropagation();

    let modalRef = this.modal.open(RemoveFileComponent);
    let doc = this.files.getFile(parentIndex, index);
    modalRef.componentInstance.title = doc.title;

    modalRef.result.then((result) => {
      if (result) {
        this.files.removeFile(parentIndex, index);
      }
    });
  }
}