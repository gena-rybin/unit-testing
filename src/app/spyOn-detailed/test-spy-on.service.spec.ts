import {TestSpyOnService} from "./test-spy-on.service";
import {TestBed} from "@angular/core/testing";
import {SpyOnDependencyService} from "./spy-on-dependency.service";

describe('test-spy-on.service', () => {
  let service: TestSpyOnService;
  const fakeSpyOnDependencyService: SpyOnDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: SpyOnDependencyService, useValue: fakeSpyOnDependencyService},
        TestSpyOnService,
      ]
    });
  });
});
