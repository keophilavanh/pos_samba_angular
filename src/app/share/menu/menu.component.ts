import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  toggled_sidebar:boolean = true
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    
  }

  toggled(){

    if(this.toggled_sidebar){
      this.document.body.classList.add('sidebar-toggled');
      this.document.getElementById('accordionSidebar').classList.add('toggled');
      this.toggled_sidebar = false
    }else{
      this.document.body.classList.remove('sidebar-toggled');
      this.document.getElementById('accordionSidebar').classList.remove('toggled');
      this.toggled_sidebar = true
    }

  }

}
