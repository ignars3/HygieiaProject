import { Component, OnInit, Renderer2 } from '@angular/core';
import { TokenProviderService } from '../shared/services/token-provider.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

  public shedulerElement: boolean = true;

  public applyElement: boolean = false;

  public manageElement: boolean = false;

  public chatElement: boolean = false;

  public secondElement: boolean = false;

  public messageElement: boolean = false;

  public get isSheduler(): boolean {
    return this.shedulerElement;
  }

  public get isApply(): boolean {
    return this.applyElement;
  }

  public get isManage(): boolean {
    return this.manageElement;
  }

  public get isChat(): boolean {
    return this.chatElement;
  }

  public get isSecond(): boolean {
    return this.secondElement;
  }

  public get isMessage(): boolean {
    return this.messageElement;
  }
  makeSheduler()
  {
    this.shedulerElement = true;

    this.applyElement = false;
  
    this.manageElement = false;
  
    this.chatElement = false;
  }

  makeApply() {
    this.shedulerElement = false;

    this.applyElement = true;
  
    this.manageElement = false;
  
    this.chatElement = false;
  }

  makeManage() {
    this.shedulerElement = false;

    this.applyElement = false;
  
    this.manageElement = true;
  
    this.chatElement = false;
  }

  makeChat() {
    this.shedulerElement = false;

    this.applyElement = false;
  
    this.manageElement = false;
  
    this.chatElement = true;
  }

  first() {
    document.getElementById("second")?.classList.remove("this-m");
    document.getElementById("first")?.classList.add("this-m");

    this.secondElement = false;
  }

  second() {
    document.getElementById("second")?.classList.add("this-m");
    document.getElementById("first")?.classList.remove("this-m");

    this.secondElement = true;
  }

  download() {
    window.open("https://hygieiaweb.azurewebsites.net/api/home/load")
  }

  messageNew() {
    this.messageElement = true;
  }

  third() {

  }

  edit() {

  }

  sheduler() {

  }

  applyForm() {

  }

  fillData() {

  }

  chat() {

  }
}
