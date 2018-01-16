import { TestBed, inject } from '@angular/core/testing';

import { EventImagesService } from './event-images.service';

describe('DisplayImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventImagesService]
    });
  });

  it('should be created', inject([EventImagesService], (service: EventImagesService) => {
    expect(service).toBeTruthy();
  }));
});
