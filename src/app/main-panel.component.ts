import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';

import { FileService, Document } from './file.service';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements AfterViewInit {
  @ViewChildren("titleEdit")
  titleEdits: QueryList<HTMLInputElement>;

  editing: boolean = false;

  get isFileSelected(): boolean {
    return this.files.selectedFile !== null;
  }

  get titleText(): string {
    return this.isFileSelected ? this.files.selectedFile.name : "No File Selected";
  }

  get selectedFile(): Document {
    return this.isFileSelected ? this.files.selectedFile : null;
  }

  constructor(public files: FileService) { }

  ngAfterViewInit() {
    this.titleEdits.changes.subscribe((els: QueryList<ElementRef>) => {
      let el = els.first;
      if (el !== undefined) {
        el.nativeElement.focus();
      }
    });
  }

  editFileName() {
    this.editing = true;
  }

  fileNameChanged(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.editing = false;
    }
  }
}