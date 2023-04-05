import { log } from "console";

class cNumber extends Number {
    value: number;
    constructor(value: number) {
        super(value);
        this.value=value;
    }
    add(num: number) {
        return this.valueOf() + num;
    }
    valueOf(): number {
      this.value = this.value + 1;
        return this.value;
    }
}

let num = new cNumber(10);
