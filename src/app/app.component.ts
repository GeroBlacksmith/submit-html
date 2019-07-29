import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){  }
  onSubmit(f){
    html2pdf(
      f.value.convertir,
      {//opt
        pagebreak: {
          mode:['css'],
          before:['.pagebreak']
        }
      });
  }
}
