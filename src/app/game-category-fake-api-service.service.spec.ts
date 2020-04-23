import { TestBed } from '@angular/core/testing';

import { GameCategoryFakeApiServiceService } from './game-category-fake-api-service.service';

describe('GameCategoryFakeApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameCategoryFakeApiServiceService = TestBed.get(GameCategoryFakeApiServiceService);
    expect(service).toBeTruthy();
  });
});
