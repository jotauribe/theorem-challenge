import { Person } from "../types";
import { pretendNetwork } from "./pretendNetwork";

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
