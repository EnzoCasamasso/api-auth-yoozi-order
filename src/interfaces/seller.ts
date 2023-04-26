import { Business } from "./business";
import { Client } from "./client";

export interface Seller {
    id: string;
    userName: string;
    email: string;
    business: Business;
    businessName: string;
    businessId: string;
    clients?: Client[];
}