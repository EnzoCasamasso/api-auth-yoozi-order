export interface Product {
    id?: string;
    businessId: string;
    description: string;
    salePrice: number;
    coastPrice: number;
    created_at: Date;
    deleted_at?: Date;
}