export type BarbellLoad = {
  left: number;
  right: number;
};

export function calculate(
  barbellWeight: number,
  targetWeight: number,
  availableWeights: Record<number, number>
): BarbellLoad {
  return { left: 0, right: 0 };
}
