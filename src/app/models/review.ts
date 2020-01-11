export interface IReview {
  id?: number;
  cardId: number;
  user?: string;
  email?: string;
  date?: string;
  rate?: number;
  upVote?: number;
  downVote?: number;
  avatar?: string;
  description?: string;
}
