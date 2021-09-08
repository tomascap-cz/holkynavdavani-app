import { animate, style, transition, trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('fadeSlideInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
            transition(':leave', [
                animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
            ]),
        ]),
      ]
})
export class HeaderComponent implements OnInit {
    @Input()
    imageList: {image: string, alt: string}[];
    
    index = 0;
    currentImage: {image: string, alt: string};

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {};

    ngOnInit(): void {
        this.currentImage = this.imageList[this.index];
        setInterval(() => {
            if (this.index < 6) {
                this.index++;
            } else {
                this.index = 0
            }
            this.currentImage = this.imageList[this.index];
            this.changeDetectorRef.detectChanges();
        }, 5000);
    }
}