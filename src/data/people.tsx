import { useQuery } from "react-query";
import { getPeople, getPeopleWithLatesFeedbackStatus } from "./fake";
import { Person, PersonWithFeedbackStatus } from "./types";

export function usePeople(): Person[] | "loading" {
  const result = useQuery("people", getPeople);
  if (result.status === "error") throw result.error;
  if (result.status === "idle") throw new Error("Unexpected idle");
  if (result.status === "loading") return "loading";
  return result.data;
}

export function usePersonById(id: string): Person | "loading" | "not-found" {
  const people = usePeople();
  if (people === "loading") return "loading";
  return people.find((p) => p.id === id) || "not-found";
}

export function usePeopleWithLatestFeedbackStatus():
  | "loading"
  | PersonWithFeedbackStatus[] {
  const result = useQuery("people-feedback", getPeopleWithLatesFeedbackStatus);
  if (result.status === "error") throw result.error;
  if (result.status === "idle") throw new Error("Unexpected idle");
  if (result.status === "loading") return "loading";
  return result.data;
}
