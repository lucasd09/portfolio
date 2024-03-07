import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { SWRConfiguration } from "swr";
import useSWR from "swr/immutable";

const defaultOptions: SWRConfiguration = {
  revalidateOnFocus: false,
};

export function useFetch<data = unknown, error = unknown>(
  path: string,
  swrOptions = defaultOptions
) {
  const data = useSWR<data, error>(
    path,
    async (url: string, init?: RequestInit) => {
      const res = await fetch("https://lucasdalan.vercel.app/api" + url, init);
      return await res.json();
    },
    swrOptions
  );

  return data;
}
