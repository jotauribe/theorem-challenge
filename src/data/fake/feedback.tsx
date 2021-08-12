import { v4 as uuidv4 } from "uuid";
import { Feedback, PartialFeedBack, Person } from "../types";
import { pretendNetwork } from "./pretendNetwork";

function findMaximumItem<Item>(
  list: Item[],
  measurement: (item: Item) => number
): Item | undefined {
  let max = undefined as undefined | { item: Item; val: number };
  list.forEach((item) => {
    const val = measurement(item);
    if (max == undefined || val > max.val) {
      max = { item, val };
    }
  });
  return max?.item;
}

const state: Feedback[] = [];

export async function addFeedbackFor(
  person: Person,
  feedback: PartialFeedBack
) {
  await pretendNetwork();
  const index = state.findIndex((f) => f.id === feedback.id);
  if (index > -1)
    state[index] = { ...state[index], person, ...feedback } as Feedback;
  else {
    state.push({
      id: uuidv4(),
      person,
      answers: feedback.answers,
      timestamp: Date.now(),
    });
  }
}

export async function getLatestFeedbackFor(
  person: Person,
  options: { shouldPretendNetwork?: boolean } = {}
) {
  const { shouldPretendNetwork = true } = options;
  if (shouldPretendNetwork) await pretendNetwork();
  const feedbackForPerson = state.filter((row) => row.person.id === person.id);
  const latestFeedback = findMaximumItem(
    feedbackForPerson,
    (item) => item.timestamp
  );
  if (!latestFeedback) return { answers: [] };
  return latestFeedback;
}

export async function getProvidedFeedback() {
  await pretendNetwork();
  const allFeedback = state.reduce((latestFeedbackByPerson, feedback) => {
    const personId = feedback.person.id;
    const latestFeedback = latestFeedbackByPerson.get(personId);

    if (!latestFeedback) latestFeedbackByPerson.set(personId, feedback);
    else if (feedback.timestamp > latestFeedback.timestamp)
      latestFeedbackByPerson.set(personId, feedback);

    return latestFeedbackByPerson;
  }, new Map<string, Feedback>());

  return Array.from(allFeedback.values());
}
