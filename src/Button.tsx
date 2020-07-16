import { Component } from '@angular/core';

@Component({
  selector: 'button1',
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
