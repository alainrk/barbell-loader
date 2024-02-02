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
  1: 6,
  2: 10,
  5: 4,
  10: 0,
  15: 0,
  20: 2,
};

tap.test("calculator", async (t) => {
  const cases: Array<TestCase> = [
    { bbw: 10, tw: 10, aw: aw1, exp: { left: 0, right: 0 } },
    { bbw: 10, tw: 20, aw: aw1, exp: { left: 5, right: 5 } },
  ];

  t.plan(cases.length);

  for (const c of cases) {
    t.equal(calculate(c.bbw, c.tw, c.aw), c.exp);
  }
  t.end();
});
