import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe('TestingService v.2', () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy('returnValue'),
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
    fakeFirstDependencyService.returnValue.and.returnValue("three");
  });

  // не используем экземпляр класса, а СДЕЛАЕМ ЗАГЛУШКУ ЗАВИСИМОСТИ!

  it("should creat", () => {
    expect(service).toBeTruthy();
  });


  it('getIndex: should return value по индексу 1', () => {
    fakeFirstDependencyService.returnValue.and.returnValue('two');
    const result = service.getValue(service.getIndex());
    expect(result).toBe('two');
  });

});
