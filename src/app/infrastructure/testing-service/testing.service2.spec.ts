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

  // не используем экземпляр класса, а СДЕЛАЕМ ЗАГЛУШКУ ЗАВИСИМОСТИ!

  it("should creat", () => {
    expect(service).toBeTruthy();
  });


});
