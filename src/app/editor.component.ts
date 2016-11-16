declare var tinymce: any;

import { Component, Input } from '@angular/core';

import { Document } from './file.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  @Input() document: Document;

  constructor() { }
}