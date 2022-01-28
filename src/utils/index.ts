import { Params } from "@/models/Params";

const getUrlSearchParams = (): URLSearchParams => {
  return new URLSearchParams(window.location.search);
};

export const getUrlQueryParams = () => {
  const queryParams = getUrlSearchParams();

  const resultParams = {};

  queryParams.forEach((value, key) => {
    (resultParams as any)[key] = value;
  });

  return resultParams;
};

export const setUrlQueryParams = (params: Params): void => {
  const queryParams = getUrlSearchParams();

  for (const param in params) {
    if (!(params as any)[param]) {
      queryParams.delete(param);
    } else {
      queryParams.set(param, (params as any)[param]);
    }
  }

  history.pushState(null, "", "?" + queryParams.toString());
};
