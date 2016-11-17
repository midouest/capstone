import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'remove-file',
  templateUrl: './remove-file.component.html'
})
export class RemoveFileComponent {
  @Input() title: string;

  constructor(public modal: NgbActiveModal) { }

  cancel() {
    this.modal.close(false);
  }

  confirm() {
    this.modal.close(true);
  }
}