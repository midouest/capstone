import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AddFileComponent } from './add-file.component';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor.component';
import { FileService } from './file.service';
import { FileHierarchyComponent } from './file-hierarchy.component';
import { FilesPanelComponent } from './files-panel.component';
import { MainPanelComponent } from './main-panel.component';
import { PanelComponent } from './panel.component';
import { ReferencePanelComponent } from './reference-panel.component';

let AppDeclarations = [
  AddFileComponent,
  AppComponent,
  EditorComponent,
  FileHierarchyComponent,
  FilesPanelComponent,
  MainPanelComponent,
  PanelComponent,
  ReferencePanelComponent,
];

let AppProviders = [
  FileService,
];

@NgModule({
  imports: [
    BrowserModule,
    Ng2BootstrapModule
  ],
  exports: [],
  declarations: [...AppDeclarations],
  providers: [...AppProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
