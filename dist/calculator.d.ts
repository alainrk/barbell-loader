export type BarbellLoad = {
    left: number;
    right: number;
};
export type BarbellSideLoad = Array<number>;
export type BarbellResult = {
    load: BarbellLoad;
    sides: {
        left: BarbellSideLoad;
        right: BarbellSideLoad;
    };
};
export declare function calculate(barbellWeight: number, targetWeight: number, availableWeights: Record<number, number>, allowImbalance?: boolean): BarbellResult;
