import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: any;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
      this.content = this.contentService.content.cz;
  }

}
