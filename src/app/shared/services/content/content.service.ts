import { Injectable } from '@angular/core';
import textContent from '../../../../assets/bundles_cz.json';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  content = textContent.content;
  itemToOpen: string;

  constructor() { }
}
