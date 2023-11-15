import {Injectable} from "@angular/core";
import {CheckValueService} from "./check-value.service";

@Injectable()
export class SimpleService {
  constructor(private checkValueServices: CheckValueService,
              ) {
  }

  summ(arg1: number, arg2?: number):number|undefined {
    if (!arg2) {
      return undefined;
    }
    const argument1 = arg1 > 5 ? 5 : arg1;
    return argument1 + arg2;
  }

  simpleCheck(): boolean {
    return this.checkValueServices.check();
  }
}
