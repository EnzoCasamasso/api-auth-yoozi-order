import { Client } from "src/modules/client/entities/client.entity";
import { Product } from "src/modules/product/entities/product.entity";
import { Seller } from "src/modules/users/entities/seller.entity";

export interface Business {
    id?: string;
    businessName: string;
    email: string;
    password: string;
    sellers?: Seller[]; 
    products?: Product[];
    clients?: Client[];
    created_at: Date;
    deleted_at: Date;
}