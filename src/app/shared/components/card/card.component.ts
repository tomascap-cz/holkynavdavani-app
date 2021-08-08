import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  alt: string;
  @Input()
  text: string;
  @Input()
  img_url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
