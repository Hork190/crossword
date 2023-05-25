import { IQuestion } from "../../constants/mocka.words"

export interface IWordElem {
    word: string,
    value: string,
    cell: number,
    row: number,
    isHorizontal: boolean
    question: IQuestion
}

export interface ICell {
    id: string,
    row: number,
    cell: number,
    value: null | string,
    current?: string | null,
    word: null | any,
    words: any[],
    initCell?: boolean
    question?: IQuestion
    questions?: IQuestion[]
    indexLetter?: number
}
export type TWord = IWordElem[]
