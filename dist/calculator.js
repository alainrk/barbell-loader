"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(barbellWeight, targetWeight, availableWeights, allowImbalance = false) {
    // Initialize weight loaders
    const res = { left: 0, right: 0 };
    const usedDisks = [];
    // Remove barbell weight
    targetWeight -= barbellWeight;
    // Created a reversed sorted list of available weights
    const weights = Object.keys(availableWeights)
        .map((x) => parseFloat(x))
        .sort((a, b) => b - a);
    const minWeightAvailable = weights[weights.length - 1];
    if (targetWeight < 0) {
        throw new Error("Target weight must be greater than barbell weight");
    }
    const getNextWeight = (max = Infinity) => {
        for (const w of weights) {
            // Too heavy for what's needed OR Not enough disks of this weight
            if (w > max || availableWeights[w] < 2) {
                continue;
            }
            return w;
        }
        return 0;
    };
    while (targetWeight > 0) {
        const w = getNextWeight(targetWeight / 2);
        if (w === 0) {
            throw new Error("No available weights");
        }
        const newPotentialTarget = targetWeight - w * 2;
        // Use those disks
        availableWeights[w] -= 2;
        // Update new target
        targetWeight = newPotentialTarget;
        res.left += w;
        res.right += w;
        usedDisks.push(...[w, w]);
        // Just perfect
        if (targetWeight === 0) {
            break;
        }
        // No available weights anymore
        if (targetWeight < minWeightAvailable * 2) {
            if (!allowImbalance)
                break;
            // Check if imbalance is allowed, and there is a small disk we can add it on one side and that's it
            if (targetWeight === minWeightAvailable &&
                availableWeights[minWeightAvailable] > 0) {
                res.left += minWeightAvailable;
                usedDisks.push(minWeightAvailable);
            }
            // And in any case, exit
            break;
        }
        // TODO: What it the target weight would be reachable through using the smallest amount on one side only?
    }
    return res;
}
exports.calculate = calculate;
//# sourceMappingURL=calculator.js.map