import { Injectable } from '@angular/core';

export interface Folder {
  name: string,
  expanded: boolean,
  children: Array<Document>,
}

export interface Document {
  name: string,
  content: string,
  selected: boolean,
  editing: boolean,
}

@Injectable()
export class FileService {
  fileTree: Array<Folder> = [
    {
      name: "Story",
      expanded: false,
      children: [
        {
          name: "Chapter 1",
          content: "Placeholder",
          selected: false,
          editing: false,
        }
      ]
    },
    {
      name: "Players",
      expanded: false,
      children: []
    },
    {
      name: "NPCs",
      expanded: false,
      children: []
    },
    {
      name: "Locations",
      expanded: false,
      children: []
    },
    {
      name: "Monsters",
      expanded: false,
      children: []
    },
    {
      name: "Spells",
      expanded: false,
      children: [{
        name: "Magic Missile",
        content: "Placeholder",
        selected: false,
        editing: false,
      }]
    },
    {
      name: "Equipment",
      expanded: false,
      children: []
    },
    {
      name: "Rules",
      expanded: false,
      children: []
    }
  ];

  selectedFile: Document = null;
  editingFileName: Document = null;

  constructor() { }

  addFile(parentIndex: number) {

  }

  toggleFolder(index: number) {
    let folder = this.fileTree[index];
    folder.expanded = !folder.expanded;
  }

  toggleFile(parentIndex: number, index: number) {
    if (this.selectedFile !== null) {
      this.selectedFile.selected = false;
      this.selectedFile = null;
    }

    let folder = this.fileTree[parentIndex];
    this.selectedFile = folder.children[index];
    this.selectedFile.selected = true;
  }

  editFileName(parentIndex: number, index: number) {

  }
}