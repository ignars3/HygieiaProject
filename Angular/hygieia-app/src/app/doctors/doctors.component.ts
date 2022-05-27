import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { }

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

  public requestElement: boolean = false;

  public exitlement: boolean = false;

  public get isRequest(): boolean {
    return this.requestElement;
  }

  public get isExit(): boolean {
    return this.exitlement;
  }

  request() {
    this.requestElement = true;
  }

  applyMeeting() {
    this.exitlement = true;

    setTimeout(()=>{
      this.router.navigate([''])
    }, 4000);
  }

  details() {

  }
}
