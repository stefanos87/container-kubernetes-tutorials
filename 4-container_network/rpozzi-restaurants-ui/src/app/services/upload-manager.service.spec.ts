import { TestBed, inject } from '@angular/core/testing';

import { UploadManagerService } from './upload-manager.service';

describe('UploadManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadManagerService]
    });
  });

  it('should be created', inject([UploadManagerService], (service: UploadManagerService) => {
    expect(service).toBeTruthy();
  }));
});
