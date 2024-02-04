export type BarbellLoad = {
  left: number;
  right: number;
};

export function calculate(
  barbellWeight: number,
  targetWeight: number,
  availableWeights: Record<number, number>,
  allowImbalance: boolean = false
): BarbellLoad {
  // Initialize weight loaders
  const res = { left: 0, right: 0 };
  const usedDisks = [];

  // Remove barbell weight
  targetWeight -= barbellWeight;

  // Created a reversed sorted list of available weights
  const weights = Object.keys(availableWeights)
    .map((x: string) => parseFloat(x))
    .sort((a: number, b: number): number => b - a);

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
    if (w == 0) {
      throw new Error("No available weights");
    }

    const newPotentialTarget = targetWeight - w * 2;

    // Too heavy: Not needed anymore, since we've passed in the max weight for each side
    // if (newPotentialTarget < 0) {
    //   continue;
    // }

    // Use those disks
    availableWeights[w] -= 2;

    // Update new target
    targetWeight = newPotentialTarget;

    res.left += w;
    res.right += w;
    usedDisks.push(...[w, w]);

    // Just perfect
    if (targetWeight == 0) {
      break;
    }

    // TODO: How to handle this?
    // No available weights anymore
    if (targetWeight < minWeightAvailable * 2) {
      break;
    }

    // TODO: What it the target weight would be reachable through using the smallest amount on one side only?
  }

  return res;
}
