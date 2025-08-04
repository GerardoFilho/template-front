import { useQuery } from '@tanstack/react-query';

export const useFetchData = (cb: () => Promise<any>, endpoint: string, params?: any, ) => {
  return useQuery({
    queryKey: [endpoint, params],
    queryFn: cb
  });
};
