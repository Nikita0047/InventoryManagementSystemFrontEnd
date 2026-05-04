export interface AuthResponse {
    userId: number;
    fullName: string;
    email: string;
    token: string;
    expiresAt: string;
    roles: string[];
    permissions: string[];
}
