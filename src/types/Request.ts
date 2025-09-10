export type IRequest<T> = {
    data: T | null;
    success: boolean;
    error: any;
    message: string;
} 