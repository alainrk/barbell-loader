import tap from "tap";
import { BarbellLoad, calculate } from "./calculator";

type TestCase = {
  bbw: number;
  tw: number;
  aw: Record<number, number>;
  exp: BarbellLoad;
};

const aw1 = {
  0.5: 4,
  1: 4,
  2: 10,
  5: 4,
  10: 6,
  15: 2,
  20: 2,
};

const cases: Array<TestCase> = [
  { bbw: 10, tw: 10, aw: aw1, exp: { left: 0, right: 0 } },
  // { bbw: 10, tw: 20, aw: aw1, exp: { left: 5, right: 5 } },
  // { bbw: 10, tw: 25, aw: aw1, exp: { left: 7.5, right: 7.5 } },
  // { bbw: 10, tw: 30, aw: aw1, exp: { left: 10, right: 10 } },
  // { bbw: 10, tw: 31, aw: aw1, exp: { left: 10.5, right: 10.5 } },
  // { bbw: 10, tw: 32, aw: aw1, exp: { left: 11, right: 11 } },
  // { bbw: 10, tw: 35, aw: aw1, exp: { left: 12.5, right: 12.5 } },
  // { bbw: 10, tw: 35.5, aw: aw1, exp: { left: 5, right: 5 } },

  // { bbw: 0.75, tw: 10, aw: aw1, exp: { left: 5, right: 5 } },
  // { bbw: 0.75, tw: 10.25, aw: aw1, exp: { left: 5, right: 5 } },
  // { bbw: 0.75, tw: 10.5, aw: aw1, exp: { left: 5, right: 5 } },
  // { bbw: 0.75, tw: 10.75, aw: aw1, exp: { left: 5, right: 5 } },
];

for (const c of cases) {
  tap.test(`Barbell: ${c.bbw}, Target: ${c.tw}`, (t) => {
    t.equal(calculate(c.bbw, c.tw, c.aw), c.exp);
    t.end();
  });
}
