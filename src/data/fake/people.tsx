import { Person } from "../types";
import { getLatestFeedbackFor } from "./feedback";
import { pretendNetwork } from "./pretendNetwork";
import { getQuestionsFor } from "./questions";

const people: Person[] = [
  { name: "John Smith", avatarUrl: "https://i.pravatar.cc/150?img=68" },
  { name: "Martha Liberty", avatarUrl: "https://i.pravatar.cc/150?img=48" },
  { name: "Persephone Woodley" },
  { name: "Gertrude Boyle" },
  { name: "Bertram Patton", avatarUrl: "https://i.pravatar.cc/150?img=53" },
  { name: "Camron Devlin" },
  { name: "Jai Malone" },
  { name: "Ember Mcmillan" },
  { name: "Jeanette Hume" },
  { name: "Harold Hays" },
  { name: "Arianna Lennon" },
  { name: "Anna-Marie Orr" },
].map((p, i) => {
  const id = `p${i}`;
  return {
    avatarUrl:
      i === 10
        ? // Pretend to have a broken avatar URL
          `https://i.pravatar.cc/100?img=999`
        : `https://i.pravatar.cc/100?u=${encodeURIComponent(id)}`,
    id,
    ...p,
  };
});

export async function getPeople() {
  await pretendNetwork();
  return people;
}

export async function getPeopleWithLatesFeedbackStatus() {
  await pretendNetwork();
  const results = await Promise.all(
    people.map(async (person) => {
      const options = { shouldPretendNetwork: false };
      const { answers } = (await getLatestFeedbackFor(person, options)) || {};
      const questions = await getQuestionsFor(person, options);
      const isNotCompleted = questions.length > answers.length;

      if (answers.length === 0) return { person, feedbackStatus: "EMPTY" };
      if (isNotCompleted) return { person, feedbackStatus: "INCOMPLETED" };
      else return { person, feedbackStatus: "COMPLETED" };
    })
  );

  return results;
}
