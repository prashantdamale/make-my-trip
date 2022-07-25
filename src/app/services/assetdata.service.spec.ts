import { TestBed } from '@angular/core/testing';

import { AssetdataService } from './assetdata.service';

describe('AssetdataService', () => {
  let service: AssetdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
