import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-expectedgames',
  templateUrl: './expectedgames.component.html',
  styleUrls: ['./expectedgames.component.scss']
})
export class ExpectedgamesComponent implements OnInit {

  constructor() { }

  expectedGames:product[]=[
    {
      id:'1',
      name:'discount',
      image:'./assets/images/discount75.jpg',
      price:0,
      description:''
    },
    {
      id:'2',
      name:'god of war ragnarok',
      image:'./assets/images/godofwarrangarok.jpg',
      price:0,
      description:''
    },
    {
      id:'3',
      name:'fortnite',
      image:'./assets/images/fortnite.jpg',
      price:0,
      description:''
    },


  ]

  ngOnInit(): void {
  }

}
