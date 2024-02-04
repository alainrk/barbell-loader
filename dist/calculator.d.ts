export type BarbellLoad = {
    left: number;
    right: number;
};
export declare function calculate(barbellWeight: number, targetWeight: number, availableWeights: Record<number, number>, allowImbalance?: boolean): BarbellLoad;
