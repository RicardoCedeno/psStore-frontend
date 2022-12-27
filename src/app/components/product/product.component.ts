import { Component, OnInit,Input } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:product={
    id:'',
    name:'',
    price:0,
    description:'',
    image:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
