import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content/content.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
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
  @Input()
  fragment: string;
  @Input()
  context: string;

  routerLink: string;

  constructor(
    private readonly contentService: ContentService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.routerLink = this.context === 'reference' ? '/reference/' : '/sluzby';
    if (this.link) {
      this.routerLink += this.link;
    }
  }

  onCardClicked(itemToOpen: string) {
    this.contentService.itemToOpen = itemToOpen;
    console.log(this.routerLink);
    console.log(this.fragment);

    //this.router.navigate([`/reference/${this.link}`]);
  }
}
