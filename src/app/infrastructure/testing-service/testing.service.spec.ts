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
    // Устанавливаем шпионов - фейк зависимости
    // с фейк вызовами методов вместо оригинальных вызовов

    // установили шпиона и разрешили вызов ориг функции
    // spyOn(firstDependency, "returnValue").and.callThrough();

    // установили шпиона и вызвали фейк функцию = возвращаем метод
    // spyOn(firstDependency, "returnValue").and.callFake(() => 'two');

    // шпион возвращает только ожидаемое значение
    spyOn(firstDependency, "returnValue").and.returnValue('two');

    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });
});
