import { useQuery, useMutation } from '@tanstack/react-query';
import { useRequest } from './useRequest';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type CommonProps = {
  method: Method;
  endpoint: string;
  key: string | any[];
  params?: any;
  options?: any; 
  enabled?: boolean;
};

export const useApiRequest = <T = any>(props: CommonProps) => {
  const {
    method,
    endpoint,
    key,
    params,
    options = {},
    enabled = true,
  } = props;

  const request = useRequest();

  if (method === 'GET') {
    return useQuery({
      queryKey: Array.isArray(key) ? key : [key],
      enabled,
      queryFn: () =>
        request({
          method: 'GET',
          endpoint,
          params,
        }).then((res) => res as { success: boolean; data: T }),
      ...options,
    });
  }

  return useMutation({
    mutationFn: (body: any) =>
      request({
        method,
        endpoint,
        body,
        params,
      }).then((res) => res as { success: boolean; data: T }),
    ...options,
  });
};
