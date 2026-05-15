import { stadiums } from "@/src/data/stadiums";
import { Stadium } from "@/src/types/stadium";

export const getStadiums = async (): Promise<Stadium[]> => {
  return stadiums;
};
