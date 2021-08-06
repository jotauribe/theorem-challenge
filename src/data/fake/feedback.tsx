import { FeedbackPiece, Person } from "../types";
import { getPeople } from "./people";
import { getQuestionsFor } from "./questions";
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

const state = (async function () {
  const people = await getPeople();

  return Promise.all(
    people.map(async function (person) {
      const dummyAnswer1 =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

      const dummyAnswer2 =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.";
      const questions = await getQuestionsFor(person, {
        shouldPretendNetwork: false,
      });
      return {
        answers: questions.map((question, i) => {
          return {
            question,
            answer: i % 2 === 1 ? dummyAnswer1 : dummyAnswer2,
          };
        }),
        person: person,
        timestamp: Date.now() - 24 * 3600000,
      };
    })
  );
})();

export async function addFeedbackFor(person: Person, answers: FeedbackPiece[]) {
  await pretendNetwork();
  (await state).push({
    answers,
    person,
    timestamp: Date.now(),
  });
}

export async function getLatestFeedbackFor(person: Person) {
  await pretendNetwork();
  const feedbackForPerson = (await state).filter(
    (row) => row.person.id === person.id
  );
  const latestFeedback = findMaximumItem(
    feedbackForPerson,
    (item) => item.timestamp
  );
  if (!latestFeedback) return [];
  return latestFeedback.answers;
}
