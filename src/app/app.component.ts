import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private sanitizer: DomSanitizer){

  }
  onSubmit(f){
    console.log(html2pdf());
    html2pdf(
      this.sanitizer.sanitize(1, f.value.convertir),
      {//opt
        pagebreak: {
          mode:['css'],
          before:['.pagebreak']
        }
      });
    // html2pdf.Worker
  }
}
