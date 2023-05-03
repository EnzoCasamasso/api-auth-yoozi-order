export interface User {
    id: string;
    name: string;
    isAdmin: boolean;
    email: string;
    password?: string;
    type: 'business' | 'seller';
}