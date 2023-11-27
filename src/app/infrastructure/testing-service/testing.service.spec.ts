import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "../first-dependency/first-dependency.service";

describe('TestingService', () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestingService,
      ],
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
  });

  it("should creat", () => {
    expect(service).toBeTruthy();
  });

  it("getValue: should get value by index", () => {
    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });
});
