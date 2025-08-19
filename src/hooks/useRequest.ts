// src/hooks/useRequest.ts
import { useQuery, useMutation, type UseQueryOptions, type UseMutationOptions } from "@tanstack/react-query";
import api from "../services/api";

type RequestMethods = {
  get: <T>(
    key: string | any[],
    url: string,
    options?: UseQueryOptions<T>
  ) => ReturnType<typeof useQuery<T>>;
  post: <T, B = any>(
    key: string | any[],
    url: string,
    body?: B,
    options?: UseMutationOptions<T, unknown, B>
  ) => ReturnType<typeof useMutation<T, unknown, B>>;
  put: <T, B = any>(
    key: string | any[],
    url: string,
    body?: B,
    options?: UseMutationOptions<T, unknown, B>
  ) => ReturnType<typeof useMutation<T, unknown, B>>;
  delete: <T,>(
    key: string | any[],
    url: string,
    options?: UseMutationOptions<T, unknown, void>
  ) => ReturnType<typeof useMutation<T, unknown, void>>;
};

export function useRequest(): RequestMethods {
  return {
    get: (key, url, options) =>
      useQuery({
        queryKey: Array.isArray(key) ? key : [key],
        queryFn: async () => {
          const { data } = await api.get(url);
          return data;
        },
        ...options,
      }),

    post: (key, url, body, options) =>
      useMutation({
        mutationKey: Array.isArray(key) ? key : [key],
        mutationFn: async (vars: typeof body) => {
          const { data } = await api.post(url, vars ?? body);
          return data;
        },
        ...options,
      }),

    put: (key, url, body, options) =>
      useMutation({
        mutationKey: Array.isArray(key) ? key : [key],
        mutationFn: async (vars: typeof body) => {
          const { data } = await api.put(url, vars ?? body);
          return data;
        },
        ...options,
      }),

    delete: (key, url, options) =>
      useMutation({
        mutationKey: Array.isArray(key) ? key : [key],
        mutationFn: async () => {
          const { data } = await api.delete(url);
          return data;
        },
        ...options,
      }),
  };
}
