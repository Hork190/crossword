import { TWord } from "../hooks/useGetWords/types";
import { IQuestion } from "./mocka.words";

export const heightGrid: number = 30;
export const widhtGrid: number = 35;
export interface ICorssWord {
    name: string,
    description: string,
    words: TWord[],
}
export interface IQusetionsForSides {
    horizontalWords: IQuestion[],
    verticalWords: IQuestion[]
}