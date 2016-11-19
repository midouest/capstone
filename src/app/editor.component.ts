declare var tinymce: any;

import { Component, Input, Output, EventEmitter, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';

import { Document } from './file.service';

declare var tinymce: any;

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  editor: any;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#editor',
      plugins: ['table'],
      height: 600,
      menubar: false,
      toolbar: 'bold italic underline bullist numlist table',
      statusbar: false,
      resize: false,
      setup: (editor) => {
        this.editor = editor;

        this.editor.on('keyup', () => {
          let content = this.editor.getContent();
          this.contentChange.emit(content);
        });
        
        this.editor.on('init', () => {
          this.editor.setContent(this.content);
        })
      }
    });
  }

  ngOnChanges() {
    if (!this.editor) {
      return;
    }

    this.editor.setContent(this.content);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}