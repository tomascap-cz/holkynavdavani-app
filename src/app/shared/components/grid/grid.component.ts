import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input()
  items: any[];
  @Input()
  context: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.context);
  }
}
