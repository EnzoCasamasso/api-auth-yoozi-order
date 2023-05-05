import { ProductStock } from "./productStock.entity";

export interface Product {
    id?: string;
    businessId: string;
    stock?: ProductStock;
    description: string;
    salePrice: number;
    coastPrice: number;
    created_at: Date;
    deleted_at?: Date;
}