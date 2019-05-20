import { TestBed } from '@angular/core/testing';

import { ProjectsServiceService } from './projects-service.service';

describe('ProjectsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsServiceService = TestBed.get(ProjectsServiceService);
    expect(service).toBeTruthy();
  });
});
