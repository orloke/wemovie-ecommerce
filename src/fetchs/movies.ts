interface RequestOptions extends RequestInit {
  url: string;
  data?: any;
}

const baseUrl = process.env.BASE_URL;

export const moviesApi = async <T>({ url, method, data, headers, ...options }: RequestOptions): Promise<T> => {
  const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
          'Content-Type': 'application/json',
          ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
  });

  if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
  }

  return response.json() as Promise<T>;
};
