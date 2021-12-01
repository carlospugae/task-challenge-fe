import { QueryClient, useMutation, useQuery } from "react-query";
import { Task } from "types";

type FetchTaskResponse = {
  data?: Task[];
};

const API_URL = process.env.REACT_APP_API_URL;

const fetchTasks = async (qty: number): Promise<FetchTaskResponse> => {
  const response = await fetch(`${API_URL}?number=${qty}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const useFetchTasks = (qty: number = 3) =>
  useQuery(["tasks"], () => fetchTasks(qty), { enabled: Boolean(qty) });

const completedReq = async (uuid: string) => {
  const res = await fetch(`${API_URL}/${uuid}`, { method: "PUT" });

  return res.json();
};

export const useCompletedMutation = (queryClient: QueryClient) =>
  useMutation(completedReq, {
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });
