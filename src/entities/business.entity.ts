import { Client } from "./client.entity";
import { Product } from "./product.entity";
import { Seller } from "./seller.entity";

export interface Business {
    id?: string;
    businessName: string;
    email: string;
    password: string;
    sellers?: Seller[]; 
    products?: Product[];
    clients?: Client[];
}