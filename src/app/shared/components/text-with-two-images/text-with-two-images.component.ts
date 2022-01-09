import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-with-two-images',
  templateUrl: './text-with-two-images.component.html',
  styleUrls: ['./text-with-two-images.component.scss'],
})
export class TextWithTwoImagesComponent implements OnInit {
  @Input()
  heading: string;
  @Input()
  text: string;
  @Input()
  imageLink1: string;
  @Input()
  imageLink2: string;
  @Input()
  sectionId: string;

  constructor() {}

  ngOnInit(): void {}
}
