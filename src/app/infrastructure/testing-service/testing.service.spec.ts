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


  it("getValue: should get value by index - вызов ориг-го метод", () => {
    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });


  //разрешили вызов оригинального метода
  it("getValue: should get value by index - шпион и callThrough", () => {
    // Устанавливаем шпионов - фейк зависимости
    // с фейк вызовами методов вместо оригинальных вызовов

    // установили шпиона и разрешили вызов ориг функции
    spyOn(firstDependency, "returnValue").and.callThrough();

    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });


  //БЕЗ вызова оригинального метода + можно добавить логику!
  it("getValue: should get value by index - шпион и callFake", () => {
    // Устанавливаем шпионов - фейк зависимости
    // с фейк вызовами методов вместо оригинальных вызовов

    // установили шпиона и вызвали фейк функцию = возвращаем метод
    spyOn(firstDependency, "returnValue").and.callFake(() => 'two');

    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });


  //БЕЗ вызова оригинального метода
  it("getValue: should get value by index - шпион и returnValue", () => {
    // Устанавливаем шпионов - фейк зависимости
    // с фейк вызовами методов вместо оригинальных вызовов

    // шпион возвращает только ожидаемое значение
    spyOn(firstDependency, "returnValue").and.returnValue('two');

    const getValue = service.getValue(1);
    expect(getValue).toBe("two");
  });
});
