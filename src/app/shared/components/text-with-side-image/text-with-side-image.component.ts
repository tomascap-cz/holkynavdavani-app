import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-text-with-side-image',
    templateUrl: './text-with-side-image.component.html',
    styleUrls: ['./text-with-side-image.component.scss']
})
export class TextWithSideImageComponent implements OnInit {
    @Input()
    renderHeading: boolean;
    @Input()
    heading: string;
    @Input()
    text: string;
    @Input()
    imageLink: string;
    @Input()
    imageStyle: string;

    path: string;

    constructor(public readonly router: Router) {}

    ngOnInit() {
        const urlTree = this.router.parseUrl(this.router.url);
        this.path = urlTree.root.children['primary'].segments.map(it => it.path).join('/');
        console.log(this.path);
    }
}