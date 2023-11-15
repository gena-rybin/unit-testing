import {SimpleService} from "./simple.service";
import {CheckValueService} from "./check-value.service";
import {TestBed} from "@angular/core/testing";

describe('simple-service TESTing', () => {
  let service: SimpleService;
  let mockCheckValueService = {check: () => true};
  // let mockCheckValueService: CheckValueService = {check: () => true };

  beforeEach(() => {
    // service = new SimpleService(new CheckValueService());
    // service = new SimpleService(mockCheckValueService as CheckValueService);

    TestBed.configureTestingModule({
      providers: [
        SimpleService,
        {provide: CheckValueService, useValue: mockCheckValueService}
      ],
    });
    service = TestBed.inject(SimpleService);
  });

  it('создание сервиса', () => {
    expect(service).toBeTruthy();
  })

  it('должен суммировать два числа', () => {
    const summ = service.summ(1,2);
    expect(summ).toBe(3);
  });

  it('должен суммировать без одного аргумента', () => {
    const summ = service.summ(4);
    expect(summ).toBeUndefined();
  });

  it('first аргумент > 5', () => {
    const summ = service.summ(8, 1);
    expect(summ).toBe(6);
  });

  it('simpleCheck handler', () => {
    const check = service.simpleCheck();
    console.log(check);
    expect(check).toBeTruthy();
  });
});
