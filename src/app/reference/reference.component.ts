import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  content: any;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.content.cz.references;
  }

}
