import { Component, OnInit, Input } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu=false;


  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu= !this.activeMenu
  }

}
