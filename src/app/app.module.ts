import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddFileComponent } from './add-file.component';
import { AppComponent } from './app.component';
import { ContentEditableDirective } from './content-editable.directive';
import { EditorComponent } from './editor.component';
import { FileService } from './file.service';
import { FileHierarchyComponent } from './file-hierarchy.component';
import { FilesPanelComponent } from './files-panel.component';
import { MainPanelComponent } from './main-panel.component';
import { PanelComponent } from './panel.component';
import { ReferencePanelComponent } from './reference-panel.component';
import { ReferenceSearchComponent } from './reference-search.component';
import { TitleEditorComponent } from './title-editor.component';

let AppDeclarations = [
  AddFileComponent,
  AppComponent,
  ContentEditableDirective,
  EditorComponent,
  FileHierarchyComponent,
  FilesPanelComponent,
  MainPanelComponent,
  PanelComponent,
  ReferencePanelComponent,
  ReferenceSearchComponent,
  TitleEditorComponent,
];

let AppProviders = [
  FileService,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  exports: [],
  declarations: [...AppDeclarations],
  providers: [...AppProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
