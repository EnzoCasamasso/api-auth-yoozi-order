import { Business } from "./business.entity";
import { Client } from "./client.entity";

export interface Seller {
    id?: string;
    userName: string;
    email: string;
    isAdmin: boolean;
    password: string;
    business?: Business;
    businessId: string;
    clients?: Client[];
}