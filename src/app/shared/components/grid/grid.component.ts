import { Component, Input } from '@angular/core';
import { ContentService } from '../../services/content/content.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {
    @Input()
    items: any[];
    @Input()
    context: string;

    constructor() {};

    
}