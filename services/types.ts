import { links } from '../utils/data';

export type SectionName = (typeof links)[number]['name'];
export type ResponseError = {
  message: string;
};

export type WishData = {
  guestName: string;
  content: string;
};
