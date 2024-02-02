export type BarbellLoad = {
  left: number;
  right: number;
};

export function calculate(
  barbellWeight: number,
  targetWeight: number,
  availableWeights: Record<number, number>
): BarbellLoad {
  const res = { left: 0, right: 0 };
  targetWeight -= barbellWeight;

  // Created a reversed sorted list of available weights
  const weights = Object.keys(availableWeights)
    .map((x: string) => parseFloat(x))
    .sort((a: number, b: number): number => a - b);

  console.log("Available weights:", weights);

  if (targetWeight < 0) {
    throw new Error("Target weight must be greater than barbell weight");
  }

  const getNextWeight = () => {
    for (const w of weights) {
      // Not enough disks of this weight
      if (availableWeights[w] < 2) {
        continue;
      }
      return w;
    }
    return 0;
  };

  while (targetWeight > 0) {
    const w = getNextWeight();
    if (w == 0) {
      throw new Error("No available weights");
    }

    const newPotentialTarget = targetWeight - w * 2;

    // TODO: This can be improved, giving max weight to getNextWeight
    // Too heavy
    if (newPotentialTarget < 0) {
      continue;
    }

    // Use those disks
    availableWeights[w] -= 2;

    // Update new target
    targetWeight = newPotentialTarget;

    // TODO: Here also save the disks inserted instead of just summing
    res.left += w;
    res.right += w;

    // Just perfect
    if (targetWeight == 0) {
      break;
    }

    // TODO: What it the target weight would be reachable through using the smallest amount on one side only?
  }

  return res;
}
