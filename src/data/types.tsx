export type FeedbackPiece = { answer: string; question: Question };
export type Person = {
  avatarUrl: string;
  id: string;
  name: string;
};
export type Question = { id: string; text: string };
export type Feedback = {
  id: string;
  person: Person;
  answers: FeedbackPiece[];
  timestamp: number;
  isDraft?: boolean;
};
export type PartialFeedBack = Partial<Feedback> & { answers: FeedbackPiece[] };
export type PersonWithFeedbackStatus = {
  person: Person;
  feedbackStatus: string;
};
