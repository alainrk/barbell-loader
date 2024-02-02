type Load = {
  left: number;
  right: number;
}

function load(barbellWeight: number, targetWeight: number, availableWeights: Record<number, number>): Load {
  return { left: 0, right: 0 };
}

