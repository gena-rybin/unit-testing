import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe('TestingService v.3', () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  const fakeFirstDependencyService = jasmine.createSpyObj(['returnValue', 'initValue', 'initValue2']);

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

  // CreateSpyObj - лучший метод мокания зависимостей

  it("should creat", () => {
    expect(service).toBeTruthy();
  });

  it('getIndex: should return value по индексу 1', () => {
    fakeFirstDependencyService.returnValue.and.returnValue('two');
    const result = service.getValue(service.getIndex());
    expect(result).toBe('two');
  });

  it('sayHi: должен срабатывать - проверка вызова', () => {
    fakeFirstDependencyService.initValue2.calls.reset();
    service.sayHi('');
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalledTimes(1);
  });
});
