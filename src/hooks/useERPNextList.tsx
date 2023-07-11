import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import instance from "~/utils/erpInstance";

type UseERPNextListType = {
  data: object[] | Response | unknown;
  error: Error | null;
  loading: boolean;
  refetch: () => void;
};

type Response = {
  message: {
    keys: string[];
    values: (string | null | number)[][];
    user_info: object;
  };
};

const formatResponse = (response: Response): object[] | Response => {
  if (
    response.hasOwnProperty("message") &&
    response.message.hasOwnProperty("keys") &&
    response.message.hasOwnProperty("values")
  ) {
    const formattedResponse: object[] = [];
    const keys = response.message.keys;
    const values = response.message.values;

    for (const value of values) {
      const item: Record<string, string | null | number> = {};
      for (const key of keys) {
        const index = keys.indexOf(key);
        const propertyValue = value[index];
        item[key] = propertyValue !== undefined ? propertyValue : null;
      }
      formattedResponse.push(item);
    }

    return formattedResponse;
  }

  return response;
};

export const useERPNextList = (
  endpoint: string,
  reqData: any
): UseERPNextListType => {
  const [data, setData] = useState<Response | object[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, isSignedIn, isLoaded } = useUser();

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await instance.post(endpoint, reqData);
      setData(formatResponse(response.data as Response));
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn)
      fetchList().catch((err) => {
        console.log(err);
      });
  }, [endpoint, user]);

  const refetch = (): void => {
    if (isLoaded && isSignedIn) {
      fetchList().catch((err) => {
        console.log(err);
      });
    }
  };

  return { data, error, loading, refetch };
};
