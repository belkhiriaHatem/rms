import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import instance from "~/utils/erpInstance";

type UseERPNextListType = {
  data: any;
  error: Error | null;
  loading: boolean;
  refetch: () => void;
};

function formatResponse(response: any) {
  if (
    response.hasOwnProperty("message") &&
    response["message"].hasOwnProperty("keys") &&
    response["message"].hasOwnProperty("values")
  ) {
    let formattedResponse: any[] = [];
    let keys = response["message"]["keys"];
    let values = response["message"]["values"];

    for (let value of values) {
      let item: any = {};
      for (let index = 0; index < value.length; index++) {
        item[keys[index]] = value[index];
      }
      formattedResponse.push(item);
    }

    response = formattedResponse;
  }

  return response;
}

export const useERPNextList = (
  endpoint: string,
  reqData: any
): UseERPNextListType => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user, isSignedIn, isLoaded } = useUser();

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await instance.post(endpoint, reqData);
      setData(formatResponse(response.data));
      setError(null);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && isSignedIn) fetchList();
  }, [endpoint, user]);

  const refetch = () => {
    if (isLoaded && isSignedIn) fetchList();
  };

  return { data, error, loading, refetch };
};
