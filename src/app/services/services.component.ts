import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content/content.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: any;

  constructor(private readonly contentService: ContentService) { }

  ngOnInit(): void {
    this.services = this.contentService.content.cz.services;
  }

}
