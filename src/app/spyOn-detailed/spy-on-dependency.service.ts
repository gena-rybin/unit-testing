import {Injectable} from "@angular/core";
import {CheckValueService} from "./check-value.service";

@Injectable()
export class SpyOnDependencyService {
  private nameValue: string;

  constructor() {
    this.name = 'My name';
  }

  get name() {
    return this.nameValue;
  }

  set name(name: string) {
    this.name = name;
  }
}
