import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ContentService } from './shared/services/content/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'holkynavdavani-app';

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {}
}
