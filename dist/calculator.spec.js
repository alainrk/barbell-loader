"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tap_1 = __importDefault(require("tap"));
const calculator_1 = require("./calculator");
const aw1 = {
    0.5: 4,
    1: 4,
    2: 10,
    5: 4,
    10: 6,
    15: 2,
    20: 2,
};
const cases = [
    { bbw: 10, tw: 10, aw: aw1, exp: { left: 0, right: 0 }, imb: false },
    { bbw: 10, tw: 20, aw: aw1, exp: { left: 5, right: 5 }, imb: false },
    { bbw: 10, tw: 25, aw: aw1, exp: { left: 7.5, right: 7.5 }, imb: false },
    { bbw: 10, tw: 30, aw: aw1, exp: { left: 10, right: 10 }, imb: false },
    { bbw: 10, tw: 31, aw: aw1, exp: { left: 10.5, right: 10.5 }, imb: false },
    { bbw: 10, tw: 32, aw: aw1, exp: { left: 11, right: 11 }, imb: false },
    { bbw: 10, tw: 35, aw: aw1, exp: { left: 12.5, right: 12.5 }, imb: false },
    { bbw: 10, tw: 35.5, aw: aw1, exp: { left: 12.5, right: 12.5 }, imb: false },
    { bbw: 10, tw: 35.5, aw: aw1, exp: { left: 13, right: 12.5 }, imb: true },
    // { bbw: 0.75, tw: 10, aw: aw1, exp: { left: 5, right: 5 }, imb: false },
    // { bbw: 0.75, tw: 10.25, aw: aw1, exp: { left: 5, right: 5 }, imb: false },
    // { bbw: 0.75, tw: 10.5, aw: aw1, exp: { left: 5, right: 5 }, imb: false },
    // { bbw: 0.75, tw: 10.75, aw: aw1, exp: { left: 5, right: 5 }, imb: false },
];
for (const c of cases) {
    tap_1.default.test(`Barbell: ${c.bbw}, Target: ${c.tw}, Imbalance: ${c.imb}`, (t) => {
        const res = (0, calculator_1.calculate)(c.bbw, c.tw, JSON.parse(JSON.stringify(c.aw)));
        // console.log(`Res: ${JSON.stringify(res)} - Exp: ${JSON.stringify(c.exp)}`);
        t.same(res, c.exp);
        t.end();
    });
}
//# sourceMappingURL=calculator.spec.js.map