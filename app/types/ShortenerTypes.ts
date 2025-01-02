export type ShortenerType = {
    id?: string;
    url: string;
    code: string;
    clickCount?: number;
    status?: string;
    createdAt?: string;
};

export type ShortenerFormType = {
    url: string;
};
