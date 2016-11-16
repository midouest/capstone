import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
})
export class AddFileComponent implements OnInit {
  fileTypes = [
    "Story",
    "Player",
    "NPC",
    "Location",
    "Monster",
    "Spell",
    "Equipment",
    "Rule"
  ];

  constructor() { }

  ngOnInit() { }
}