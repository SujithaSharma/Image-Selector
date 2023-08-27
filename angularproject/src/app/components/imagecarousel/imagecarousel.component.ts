import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.css']
})
export class ImagecarouselComponent implements OnInit {

  totalImg: any;
  removable: any

  ngOnInit(): void {
    this.totalImg = document.querySelectorAll(".carousel-item")
    this.totalImg.forEach((image: any, index: any) => {
      image.addEventListener('click', () => {
        console.log(this.totalImg[index])
        this.removable = this.totalImg[index]
        image.remove()
      })
    })
  }
}
