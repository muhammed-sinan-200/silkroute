export type FreightCalculationResult = {
    weightCbm: number;
    actualCbm: number;
    chargeableCbm: number;
    freightCost: number;
    documentationFee: number;
    totalCost: number;
};

const CBM_DIVISOR = 500;
const RATE_PER_CBM = 265;
const DOCUMENTATION_FEE = 150;

export function calculateFreight(
    grossWeight: number,
    volume: number,
    documentationNeeded: boolean
): FreightCalculationResult {
    const weightCbm = grossWeight / CBM_DIVISOR;
    const chargeableCbm = Math.max(weightCbm, volume);
    const freightCost = chargeableCbm * RATE_PER_CBM;
    const documentationFee = documentationNeeded ? DOCUMENTATION_FEE : 0;
    const totalCost = freightCost + documentationFee;

    return {
        weightCbm,
        actualCbm: volume,
        chargeableCbm,
        freightCost,
        documentationFee,
        totalCost,
    };
}