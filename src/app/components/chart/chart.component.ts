import { Component, OnInit, Input } from '@angular/core';
import { Asset } from 'src/app/Asset';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  @Input() asset?: Asset;

  ngOnInit(): void {}
}
