import { Component, Output, EventEmitter } from '@angular/core';

import { FileType } from './file.service';

@Component({
  selector: 'add-file',
  templateUrl: './add-file.component.html',
})
export class AddFileComponent {
  @Output() fileTypeSelected = new EventEmitter<FileType>();

  get fileTypeNames(): Array<string> {
    return Array.from(this.fileTypes.keys());
  } 

  fileTypes = new Map<string, FileType>();

  constructor() {
    this.fileTypes.set("Story", FileType.Story);
    this.fileTypes.set("Player", FileType.Player);
    this.fileTypes.set("NPC", FileType.NPC);
    this.fileTypes.set("Location", FileType.Location);
    this.fileTypes.set("Monster", FileType.Monster);
    this.fileTypes.set("Spell", FileType.Spell);
    this.fileTypes.set("Equipment", FileType.Equipment);
    this.fileTypes.set("Rule", FileType.Rule);
  }

  emitSelection(fileType: string) {
    this.fileTypeSelected.emit(this.fileTypes.get(fileType));
  }
}