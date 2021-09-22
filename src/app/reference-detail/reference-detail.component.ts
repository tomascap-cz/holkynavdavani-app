import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';

@Component({
  selector: 'app-reference-detail',
  templateUrl: './reference-detail.component.html',
  styleUrls: ['./reference-detail.component.scss']
})
export class ReferenceDetailComponent implements OnInit {
  coupleNames: string;
  imageUrl: string;
  reference: string[];

  story: { link: string, caption: string, img_url: string, reference: string[] };

  constructor(private readonly contentService: ContentService, private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.story = this.contentService.content.cz.references.find(item => item.caption === this.contentService.itemToOpen);
    console.log(this.story);
    
    this.coupleNames = this.story.caption;
    this.imageUrl = this.story.img_url;
    this.reference = this.story.reference;
    this.changeDetectorRef.detectChanges();
  }

}
