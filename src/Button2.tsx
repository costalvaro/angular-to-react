import { Component } from '@angular/core';

@Component({
  selector: 'button2',
  template: `
    <button (click)="onChange($event)">
       Hello World 2
    </button>
  `,
})
export class NgButton2 {
  onChange = (e: any) => {
    console.log('click', e);
  };
}
