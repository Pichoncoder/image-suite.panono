import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectBtnComponent } from './image-select-btn.component';

describe('ImageSelectBtnComponent', () => {
  let component: ImageSelectBtnComponent;
  let fixture: ComponentFixture<ImageSelectBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSelectBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
