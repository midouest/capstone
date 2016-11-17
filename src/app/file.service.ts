import { Injectable } from '@angular/core';

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
NameMap.set(FileType.Story, "Story");
NameMap.set(FileType.Player, "Player");
NameMap.set(FileType.NPC, "NPC");
NameMap.set(FileType.Location, "Location");
NameMap.set(FileType.Monster, "Monster");
NameMap.set(FileType.Spell, "Spell");
NameMap.set(FileType.Equipment, "Equipment");
NameMap.set(FileType.Rule, "Rule");

@Injectable()
export class FileService {
  fileTree: Array<Folder> = [
    {
      name: "Story",
      expanded: false,
      children: [
        {
          title: "Chapter 1",
          content: "",
          selected: false,
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
        title: "Magic Missile",
        content: "",
        selected: false,
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

  get fileNames(): Array<string> {
    let names = [];
    for (let folder of this.fileTree) {
      for (let file of folder.children) {
        names.push(file.title);
      }
    }
    return names;
  }

  selectedFile: Document = null;

  constructor() { }

  addFile(type: FileType) {
    let file = {
      title: "Untitled " + NameMap.get(type),
      content: "",
      selected: false,
    };

    let index = IndexMap.get(type);
    let folder = this.fileTree[index];
    let len = folder.children.push(file);
    folder.expanded = true;

    this.toggleFile(index, len - 1);
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
}