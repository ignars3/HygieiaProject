import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

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

  public drugElement: boolean = false;

  public exitElement: boolean = false;

  public get isRequest(): boolean {
    return this.requestElement;
  }

  public get isDrug(): boolean {
    return this.drugElement;
  }

  public get isExit(): boolean {
    return this.exitElement;
  }


  request() {
    if (this.requestElement)
    {
      this.requestElement = false;
    }
    else
    {
    this.requestElement = true;
    }
  }

  requestTwo() {

    this.exitElement = true;

    setTimeout(()=>{
      this.router.navigate([''])
    }, 4000);
  }

  showDrug() {
    this.drugElement = true;
  }

  details() {

  }
}
