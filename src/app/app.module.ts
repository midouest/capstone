import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddFileComponent } from './add-file.component';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor.component';
import { FileService } from './file.service';
import { FileHierarchyComponent } from './file-hierarchy.component';
import { FilesPanelComponent } from './files-panel.component';
import { MainPanelComponent } from './main-panel.component';
import { PanelComponent } from './panel.component';
import { ReferenceService } from './reference.service';
import { ReferenceDetailComponent } from './reference-detail.component';
import { ReferenceListComponent } from './reference-list.component';
import { ReferencePanelComponent } from './reference-panel.component';
import { ReferenceSearchComponent } from './reference-search.component';
import { RemoveFileComponent } from './remove-file.component';
import { TitleEditorComponent } from './title-editor.component';

const AppDeclarations = [
  AddFileComponent,
  AppComponent,
  EditorComponent,
  FileHierarchyComponent,
  FilesPanelComponent,
  MainPanelComponent,
  PanelComponent,
  ReferenceDetailComponent,
  ReferenceListComponent,
  ReferencePanelComponent,
  ReferenceSearchComponent,
  RemoveFileComponent,
  TitleEditorComponent,
];

const AppProviders = [
  FileService,
  ReferenceService,
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
  bootstrap: [AppComponent],
  entryComponents: [RemoveFileComponent],
})
export class AppModule { }
