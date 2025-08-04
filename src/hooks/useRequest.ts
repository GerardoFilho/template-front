import axios from "axios";
import env from "../config/env";
import { useCallback } from "react";

type Props = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    endpoint: string;
    params?: any;
    body?: any;
    key?: string;
}

type Response<T> = {
    success: boolean;
    statusCode: number;
    data: T | null;
    message: string;
    error: any | null;
}
export const useRequest = () => {

    const request = useCallback(async ({ method, endpoint, body, params }: Props) => {
        const headers: any = {};
        const token = sessionStorage.getItem('token');

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        const request: Response<any> = await axios.request({
            method: method,
            headers,
            url: `${env.VITE_API_URL}/${endpoint}`,
            params,
            data: body,
        }).then((e) => ({
            success: true,
            statusCode: e.status,
            data: e.data,
            message: 'OK',
            error: null
        }))
            .catch((e) => ({
                success: false,
                statusCode: parseInt(e?.response?.status),
                data: null,
                message: String(e?.response?.data?.message || e?.message || 'Ops, aconteceu algo inesperado, tente novamente'),
                error: e,
            }));

        return request;
    }, []);

    return request;
}

