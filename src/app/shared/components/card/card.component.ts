import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content/content.service';

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
  @Input()
  link: string;

  constructor(private readonly contentService: ContentService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onCardClicked(itemToOpen: string) {
    this.contentService.itemToOpen = itemToOpen;
    //this.router.navigate([`/reference/${this.link}`]);
  }

}
