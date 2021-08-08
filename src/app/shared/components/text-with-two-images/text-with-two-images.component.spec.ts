import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWithTwoImagesComponent } from './text-with-two-images.component';

describe('TextWithTwoImagesComponent', () => {
  let component: TextWithTwoImagesComponent;
  let fixture: ComponentFixture<TextWithTwoImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWithTwoImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWithTwoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
