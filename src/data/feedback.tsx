import { useMutation, useQuery, useQueryClient } from "react-query";
import { PartialFeedBack, Person } from "./types";
import {
  addFeedbackFor,
  getLatestFeedbackFor,
  getProvidedFeedback,
} from "./fake";

export function useAddFeedbackFor(person: Person) {
  const queryClient = useQueryClient();
  return useMutation(
    (feedback: PartialFeedBack) => addFeedbackFor(person, feedback),
    {
      onSuccess: () => {
        queryClient.removeQueries(["feedback"]);
        queryClient.removeQueries("people-feedback");
        queryClient.removeQueries(["feedback", person.id]);
      },
    }
  );
}

export function useFeedbackFor(person: Person) {
  const result = useQuery(["feedback", person.id], () =>
    getLatestFeedbackFor(person)
  );
  if (result.status === "error") throw result.error;
  if (result.status === "idle") throw new Error("Unexpected idle");
  if (result.status === "loading") return "loading";
  return result.data;
}

export function useProvidedFeedback() {
  const result = useQuery(["feedback"], getProvidedFeedback);
  if (result.status === "error") throw result.error;
  if (result.status === "idle") throw new Error("Unexpected idle");
  if (result.status === "loading") return "loading";
  return result.data;
}
