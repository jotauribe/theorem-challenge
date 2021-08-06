export type FeedbackPiece = { answer: string; question: Question };
export type Person = {
  avatarUrl: string;
  id: string;
  name: string;
};
export type Question = { id: string; text: string };
