import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection2: Array<object> = [
    {
      image: './assets/images/cod modern.jpg',
      thumbImage: './assets/images/cod modern.jpg',
      alt: 'Image 2-1',
      title: 'Call of dutty: Modern Warfare'
    },
    {
      image: './assets/images/godofwarrangarok.jpg',
      thumbImage: './assets/images/godofwarrangarok.jpg',
      alt: 'Image 2-2',
      title: 'God of War Ragnarok'
    },
    {
      image: './assets/images/Hogwarts Legacy.jpg',
      thumbImage: './assets/images/Hogwarts Legacy.jpg',
      alt: 'Image 2-3',
      title: 'Hogwarts Legacy'
    },
    {
      image: './assets/images/sonic frontiers.jpg',
      thumbImage: './assets/images/sonic frontiers.jpg',
      alt: 'Image 2-4',
      title: 'sonic frontiers'
    },
    {
      image: './assets/images/gotham knights.jpg',
      thumbImage: './assets/images/gotham knights.jpg',
      alt: 'Image 2-5',
      title: 'gotham knights'
    },
    {
      image: './assets/images/crisis core.jpg',
      thumbImage: './assets/images/crisis core.jpg',
      alt: 'Image 2-6',
      title: 'CRISIS CORE - FINAL FANTASY VII - REUNION'
    },
    {
      image: './assets/images/need for speed.jpg',
      thumbImage: './assets/images/need for speed.jpg',
      alt: 'Image 2-7',
      title: 'Need for Speed Unbound'
    },
    {
      image: './assets/images/evil west.jpg',
      thumbImage: './assets/images/evil west.jpg',
      alt: 'Image 2-8',
      title: 'evil west'
    },

];
}
