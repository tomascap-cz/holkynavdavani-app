import { Component, OnInit } from "@angular/core";
import { ContentService } from "../shared/services/content/content.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    homeContent: any;

    constructor(private readonly contentService: ContentService) {}

    ngOnInit(): void {
        this.homeContent = this.contentService.content.cz.home;
    }
}