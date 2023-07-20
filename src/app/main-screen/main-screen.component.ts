import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-json';
import * as ace from 'ace-builds';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements AfterViewInit, OnDestroy {
  code: string = '';
  aceEditor: any;
  public methodList = ['GET', 'POST', 'PUT', 'HEAD', 'PATCH', 'DELETE'];

  constructor(public activeModal: NgbActiveModal) {}


  @ViewChild('editor', { static: false })
  private editor?: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (this.editor) {
      ace.config.set('fontSize', '14px');
      this.aceEditor = ace.edit(this.editor.nativeElement);
      this.aceEditor.setTheme('ace/theme/twilight');
      this.aceEditor.session.setMode('ace/mode/json');
      this.aceEditor.session.setValue('');
    }
  }
  ngOnDestroy() {
    this.aceEditor.destroy();
  }
}
