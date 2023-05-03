export interface User {
    id: string;
    name: string;
    isAdmin: boolean;
    businessId: string;
    email: string;
    password?: string;
    type: 'business' | 'seller';
}