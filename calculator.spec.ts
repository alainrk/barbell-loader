import tap from "tap";
import { load } from "./calculator";

type testCase = {
  bbw: number;
  tw: number;
  aw: Record<number, number>;
  exp: Load;
}

const aw1 = {
  0.5: 4,
  1: 6,
  2: 10,
  5: 4,
  10: 6,
  15: 2,
  20: 2,
};

const cases = [
  { bbw: 10, tw: 10, aw: aw1, exp: { left: 0, right: 0 } }};
  { bbw: 10, tw: 20, aw: aw1, exp: { left: 5, right: 5 } }};
];

tap.test("calculator", async (t) => {
  for (const case of cases) {
    load(case.bbw, case.tw, case.aw) === case.exp;
  }
});

