export interface AuthUser {
    id: string;
    name: string;
    isAdmin: boolean;
    email: string;
    password?: string;
}