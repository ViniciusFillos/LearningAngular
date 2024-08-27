import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  //styleUrl: './card-button-cancel.component.scss'
  styles: [
    `
      .card-button-cancel {
        padding: 10px;
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: #ff0000;
        cursor: pointer;
        font-weight: bold;
      }
    `
  ],
})
export class CardButtonCancelComponent {

}
