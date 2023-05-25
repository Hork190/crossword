export type Direction = 'horizontal' | 'vertical'
export interface IMatchLetter {
    letter: string,
    index: number
}
export interface IMatchLetters {
    mainMatch: IMatchLetter[],
    secondMatch: IMatchLetter[],
}
export interface IMatchWord {
    word: string,
    indexLetters: number,
    listLetter: string[],
    matchLetters: IMatchLetters,
}
export interface IWord {
    id: string,
    direction: Direction,
    word: string,
    letterArray: string[],
    possibleLinks: IMatchWord[],
    linkedWords?: string[]
    
}