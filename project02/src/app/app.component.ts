import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  widthButtton1 = '120px';
  widthButtton2 = '140';

  stylesObject = {
    width:'200px',
    backgroundColor: 'green',
    color: 'red'
  };

  updateStyleObjeto() {
    this.stylesObject.width = '170px';
    this.stylesObject.backgroundColor = 'lightgreen';
    console.log('O método não fuciona corretamente xD')
  }

  updateStyleObjetoCorreto() {
    this.stylesObject = {
      width: '170px',
      backgroundColor: 'lightgreen',
      color: 'red',
    }
    console.log('Esse método sim fuciona corretamente!')
  }

  protected updateWidth() {
    this.widthButtton2 = '300';
  }
}
