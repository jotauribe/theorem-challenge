import { useMutation, useQuery, useQueryClient } from "react-query";
import { FeedbackPiece, Person } from "./types";
import {
  addFeedbackFor,
  getLatestFeedbackFor,
  getProvidedFeedback,
} from "./fake";

export function useAddFeedbackFor(person: Person) {
  const queryClient = useQueryClient();
  return useMutation(
    (answers: FeedbackPiece[]) => addFeedbackFor(person, answers),
    {
      onSuccess: () => {
        queryClient.removeQueries(["feedback", person.id]);
        queryClient.removeQueries(["feedback"]);
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
