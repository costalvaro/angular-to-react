import { Component } from '@angular/core';
import { SELECTOR } from './angular-to-react';

@Component({
  selector: SELECTOR,
  template: `
    <button (click)="onChange($event)">
       Hello World
    </button>
  `,
})
export class NgButton {
  onChange = (e: any) => {
    console.log('click', e);
  };
}
