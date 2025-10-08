import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonTitle: string = "Título do botão";
  buttonDisabled: boolean = false;

  onButtonClick() {
    this.buttonTitle = 'New TITLE';
    this.buttonDisabled = !this.buttonDisabled;
  }
}
