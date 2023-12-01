import {Injectable} from "@angular/core";
import {SpyOnDependencyService} from "./spy-on-dependency.service";

@Injectable()
export class TestSpyOnService {

  constructor(private spyOnService: SpyOnDependencyService) { }

  sayHi() {
    const name = this.spyOnService.name;
    if (name === "Mike") {
      return `hi, ${name}`;
    } else {
      return `hi --> ${name}`
    }
  }
}
