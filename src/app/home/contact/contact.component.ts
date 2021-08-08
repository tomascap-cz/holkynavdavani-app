import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @Input()
    content: any;

    addressLines: any[];

    constructor() {}

    ngOnInit(): void {
        this.addressLines = this.content.contactInfo.split("\n");
    }
}