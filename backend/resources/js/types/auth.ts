export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: any;
    created_at: string;
    updated_at: string;
};

export type AuthOrGuest = {
    user: User | null;
};

export type Auth = {
    user: User;
};

export type Guest = {
    user: null;
};
