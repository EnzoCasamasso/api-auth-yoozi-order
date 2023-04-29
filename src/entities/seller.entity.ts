import { Business } from "./business.entity";
import { Client } from "./client.entity";

export interface Seller {
    id: string;
    userName: string;
    email: string;
    password: string;
    business: Business;
    businessName: string;
    businessId: string;
    clients?: Client[];
}