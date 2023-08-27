import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datacards',
  templateUrl: './datacards.component.html',
  styleUrls: ['./datacards.component.css']
})
export class DatacardsComponent {
  @Input() total: any
}
