import { Injectable } from '@angular/core';

import { Data } from './data';

export enum FileType {
  Story,
  Player,
  NPC,
  Location,
  Monster,
  Spell,
  Equipment,
  Rule,
}

export interface Folder {
  name: string,
  expanded: boolean,
  children: Array<Document>,
}

export interface Document {
  title: string,
  content: string,
  selected: boolean,
  minimized: boolean,
}

export class DocumentRecord {
  constructor(public title: string, public parentIndex: number, public index: number) { }

  equals(other: DocumentRecord): boolean {
    return this.title === other.title &&
           this.parentIndex === other.parentIndex &&
           this.index === other.index;
  }
}

const IndexMap = new Map<FileType, number>();
IndexMap.set(FileType.Story, 0);
IndexMap.set(FileType.Player, 1);
IndexMap.set(FileType.NPC, 2);
IndexMap.set(FileType.Location, 3);
IndexMap.set(FileType.Monster, 4);
IndexMap.set(FileType.Spell, 5);
IndexMap.set(FileType.Equipment, 6);
IndexMap.set(FileType.Rule, 7);

const NameMap = new Map<FileType, string>();
NameMap.set(FileType.Story, "Chapter");
NameMap.set(FileType.Player, "Player");
NameMap.set(FileType.NPC, "NPC");
NameMap.set(FileType.Location, "Location");
NameMap.set(FileType.Monster, "Monster");
NameMap.set(FileType.Spell, "Spell");
NameMap.set(FileType.Equipment, "Equipment");
NameMap.set(FileType.Rule, "Rule");

@Injectable()
export class FileService {
  fileTree: Array<Folder> = Data;

  get allFiles(): Array<DocumentRecord> {
    let files = [];
    for (let i = 0; i < this.fileTree.length; i++) {
      let folder = this.fileTree[i];
      for (let j = 0; j < folder.children.length; j++) {
        let file = folder.children[j];
        files.push(new DocumentRecord(file.title, i, j));
      }
    }
    return files;
  }

  selectedFile: Document = null;
  selectedFileParentIndex: number = null;
  selectedFileIndex: number = null;

  constructor() { }

  addFile(type: FileType) {
    let file = {
      title: "Untitled " + NameMap.get(type),
      content: "",
      selected: false,
      minimized: false,
    };

    let index = IndexMap.get(type);
    let folder = this.fileTree[index];
    let len = folder.children.push(file);
    folder.expanded = true;

    this.toggleFile(index, len - 1);
  }

  getFile(parentIndex: number, index: number): Document {
    let folder = this.fileTree[parentIndex];
    return folder.children[index];

  }

  toggleFolder(index: number) {
    let folder = this.fileTree[index];
    folder.expanded = !folder.expanded;
  }

  isFileSelected(parentIndex: number, index: number) {
    return parentIndex === this.selectedFileParentIndex && index === this.selectedFileIndex;
  }

  clearSelectedFile() {
    if (this.selectedFile !== null) {
      this.selectedFile.selected = false;
      this.selectedFile = null;
      this.selectedFileParentIndex = null;
      this.selectedFileIndex = null;
    }
  }

  toggleFile(parentIndex: number, index: number) {
    if (this.isFileSelected(parentIndex, index)) {
      return;
    }

    this.clearSelectedFile();

    let folder = this.fileTree[parentIndex];
    this.selectedFile = folder.children[index];
    this.selectedFile.selected = true;
    this.selectedFileParentIndex = parentIndex;
    this.selectedFileIndex = index;
  }

  removeFile(parentIndex: number, index: number) {
    if (this.isFileSelected(parentIndex, index)) {
      this.clearSelectedFile();
    }

    let folder = this.fileTree[parentIndex];
    folder.children.splice(index, 1);
  }
}