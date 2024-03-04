import { SWRConfiguration } from "swr";
import useSWR from "swr/immutable";

const defaultOptions: SWRConfiguration = {
  revalidateOnFocus: false,
};

export function useFetch<data = unknown, error = unknown>(
  path: string,
  swrOptions = defaultOptions,
  method: "GET" | "POST" | "PATCH" | "DELETE" = "GET"
) {
  const data = useSWR<data, error>(
    path,
    async (url: string) => {
      const res = await fetch(url);
      return await res.json();
    },
    swrOptions
  );

  return data;
}
