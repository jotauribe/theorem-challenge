import { Person, Question } from "../types";
import { pretendNetwork } from "./pretendNetwork";

const questions: Question[] = [
  { text: "How much do you trust $name to deliver high quality work?" },
  { text: "Is $name up to date with the latest accounting regulations?" },
  {
    text: "How well does $name understand the technical domain of our product?",
  },
  {
    text:
      "Have there been any situations where $name could have managed their emotions better? What happened?",
  },
  {
    text:
      "Does $name care about our users and treats customer support as a high priority?",
  },
  {
    text:
      "What would you like $name to work on the most during the next month, to enable their continued growth?",
  },
  {
    text: "How transparent and clear are $namePossessive plans and work tasks?",
  },
  {
    text: "How well does $name understand our business goals and roadmap?",
  },
  { text: "Is there anything else you’d like to share with $name?" },
].map((q, i) => {
  return { ...q, id: "q" + i };
});

const possessive = (name: string) =>
  name.endsWith("s") ? `${name}‘` : `${name}‘s`;
const questionsForPerson = (person: Person): Question[] =>
  questions.map((q) => ({
    ...q,
    text: q.text
      .replace(/\$namePossessive/g, possessive(person.name))
      .replace(/\$name/g, person.name),
  }));

export async function getQuestionsFor(
  person: Person,
  options: { shouldPretendNetwork?: boolean } = {}
) {
  const { shouldPretendNetwork = true } = options;
  if (shouldPretendNetwork) await pretendNetwork();
  return questionsForPerson(person);
}
