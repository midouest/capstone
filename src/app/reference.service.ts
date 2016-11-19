import { Injectable } from '@angular/core';

import { FileService, Document, DocumentRecord } from './file.service';

@Injectable()
export class ReferenceService {

  records: Array<DocumentRecord> = [];

  get documents(): Array<Document> {
    let docs = [];
    for (let record of this.records) {
      let doc = this.files.getFile(record.parentIndex, record.index);
      if (doc) {
        docs.push(doc);
      }
    }
    return docs;
  }

  constructor(public files: FileService) { }

  addReference(file: DocumentRecord) {
    let index = this.records.findIndex((value: DocumentRecord) => value.equals(file));
    if (index > -1) {
      this.records.splice(index, 1);
    }

    this.records.splice(0, 0, file);
  }

  removeReference(index: number) {
    this.records.splice(index, 1);
  }
}