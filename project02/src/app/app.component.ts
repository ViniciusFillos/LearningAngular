import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto inicial"
  inputType = "text"
  isDisabled = false

  enableInput() {
    this.isDisabled = false
  }

  disableInput() {
    this.isDisabled = true
  }

  setInputTypePassword() {
    this.inputType = "password"
  }

  setInputTypeText() {
    this.inputType = "text"
  }

  logInputText() {
    console.log(this.inputText)
  }

  handleInputKeyup(event: KeyboardEvent) {
    // const currentTarget = (event.target as HTMLInputElement).value
    // console.log(currentTarget)
  }

  handleInputEvent(event: Event) {
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }
}
