import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe('TestingService', () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy('returnValue').and.returnValue("three"),
    initValue: jasmine.createSpy('initValue'),
    initValue2: jasmine.createSpy('initValue2'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestingService,
        {provide: FirstDependencyService, useValue: fakeFirstDependencyService}
      ],
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
  });

  // не используем экземпляр класса, а СДЕЛАЕМ ЗАГЛУШКУ ЗАВИСИМОСТИ!

  it("should creat", () => {
    expect(service).toBeTruthy();
  });


});
