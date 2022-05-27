import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.scss']
})
export class DrugsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'mat-typography');
    this.removeHeader()
  }
  
  removeHeader(): void {
    let element = document.getElementById('wp-block-library-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;

    element = document.getElementById('definity_main-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;

    
    element = document.getElementById('bootstrap-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;
  }

  request() {

  }

  details() {

  }

}
