export type FreightCalculationResult = {
    weightCbm: number;
    actualCbm: number;
    chargeableCbm: number;
    freightCost: number;
    documentationFee: number;
    totalCost: number;
};

export function calculateFreight(
    grossWeight: number,
    volume: number,
    documentationNeeded: boolean
): FreightCalculationResult {
    const weightCbm = grossWeight / 500;
    const chargeableCbm = Math.max(weightCbm, volume);
    const freightCost = chargeableCbm * 265;
    const documentationFee = documentationNeeded ? 150 : 0;
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