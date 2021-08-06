import { useMutation, useQuery, useQueryClient } from "react-query";
import { addFeedbackFor, getLatestFeedbackFor } from "./fake";
import { FeedbackPiece, Person } from "./types";

export function useAddFeedbackFor(person: Person) {
  const queryClient = useQueryClient();
  return useMutation(
    (answers: FeedbackPiece[]) => addFeedbackFor(person, answers),
    {
      onSuccess: () => {
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
