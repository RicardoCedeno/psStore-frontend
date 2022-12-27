import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: './assets/images/tunic.jpg',
      thumbImage: './assets/images/tunic.jpg',
      alt: 'Image 1-1',
      title: 'tunix'
    },
    {
      image: './assets/images/pathfinder.jpg',
      thumbImage: './assets/images/pathfinder.jpg',
      alt: 'Image 1-2',
      title: 'pathfinder'
    },
    {
      image: './assets/images/overwatch.jpg',
      thumbImage: './assets/images/overwatch.jpg',
      alt: 'Image 1-3',
      title: 'overwatch'
    },
    {
      image: './assets/images/dragonball.jpg',
      thumbImage: './assets/images/dragonball.jpg',
      alt: 'Image 1-4',
      title: 'Dragon ball'
    },
    {
      image: './assets/images/century.jpg',
      thumbImage: './assets/images/century.jpg',
      alt: 'Image 1-5',
      title: 'century'
    },
    {
      image: './assets/images/valkyrie.jpg',
      thumbImage: './assets/images/valkyrie.jpg',
      alt: 'Image 1-6',
      title: 'valkyrie'
    },
    {
      image: './assets/images/hot wheels.jpg',
      thumbImage: './assets/images/hot wheels.jpg',
      alt: 'Image 1-7',
      title: 'Hot Wheels Unleashed'
    },
    {
    image: './assets/images/PGA.jpg',
      thumbImage: './assets/images/PGA.jpg',
      alt: 'Image 1-8',
      title: 'PGA'
    },
]
}

