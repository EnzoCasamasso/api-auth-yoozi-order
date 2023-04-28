import { Client } from "./client";
import { Product } from "./product";
import { Seller } from "./seller";

export interface Business {
    id: string;
    businessName: string;
    email: string;
    sellers?: Seller[] | Seller;
    products?: Product[];
    clients?: Client[];
}