import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.css']
})
export class ImagecarouselComponent implements OnInit {
  ngOnInit(): void {
    this.totalImg = [...this.flowers]
  }

  flowers: any = [
    { id: 0, img: 'assets/images/roses.jpg', title: 'ROSES' },
    { id: 1, img: 'assets/images/blueflower.jpg', title: 'BLOOMING' },
    { id: 2, img: 'assets/images/tulip.jpg', title: 'TULIP' },
  ]

  totalImg: any;
  removable: any;
  selected: any = 0;
  rejected: any = 0;
  carouselItems: any;
  singleflower: any;
  i: any = 0

  selectItem(flower: any) {
    this.carouselItems = document.querySelectorAll('.carousel-item');
    this.carouselItems[flower.id].remove()
    if (this.totalImg.length) {
      this.totalImg.length -= 1
      this.selected += 1
    }
  }

  rejectItem(flower: any) {
    this.carouselItems = document.querySelectorAll('.carousel-item');
    this.carouselItems[flower.id].remove()
    if (this.totalImg.length) {
      this.rejected += 1
      this.totalImg.length -= 1
    }
  }
}
