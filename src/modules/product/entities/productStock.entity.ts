export enum UnityMeasurement {
    L = 'L',
    M = 'M', 
    KG = 'KG', 
    UN = 'UN' 
}
export interface ProductStock {
    id?: string;
    productId: string;
    currentInventory: number;
    previousStock: number;
    unityMeasurement: UnityMeasurement;
    currentWeight?: number;
    previusWeight?: number;
    lastSale?: Date;
    lastEntry?: Date;
    lastModification?: Date;
    lastEntryLogin?: string;
    lastSaleLogin?: string;
    deleted_at?: Date;
}