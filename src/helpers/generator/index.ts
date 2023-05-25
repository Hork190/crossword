import { Direction, IMatchLetters, IMatchWord, IWord } from "./types";

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
class Generator {
    typeWord: Direction[] = ['horizontal', 'vertical']
    words;
    constructor(words: string[]) {
        this.words = words;
    }
    getHasMatch(main: string[], second: string[]): null | IMatchLetters {
        const newFirst = main.map((letter, index) => ({letter, index}))
        const newSecond = second.map((letter, index) => ({letter, index}))
        const mainMatch = newFirst.filter((item) => second.includes(item.letter));
        const secondMatch = newSecond.filter(item => main.includes(item.letter))
        // return first.filter(item => second.includes(item))
        if(mainMatch.length) {
            return {
                mainMatch,
                secondMatch
            }
        }
        return null
    }
    getPossibleLinks(listLetter: string[][], word: string[]): IMatchWord[] {
        const listLinks: IMatchWord[] = listLetter.reduce((acc: IMatchWord[], item, index) => {
            const newAcc = [...acc];
            const matchLetters = this.getHasMatch(word, item)
            if(matchLetters) {
                newAcc.push({
                    word: item.join(''),
                    listLetter: item,
                    indexLetters: index,
                    matchLetters,
                })
            }
            return newAcc;
        }, [])
        // const listLinks = listLetter.filter((item) => this.getHasMatch(word, item))
        // return listLinks.map(item => item.join(''));
        return listLinks
    }
    get crossords(): IWord[] {
        const lettersArray:string[][] = this.words.map((word) => word.split(''))
        const crossword: IWord[] = lettersArray.reduce((acc: IWord[], word, index): IWord[] => {
            const newAcc: IWord[] = [...acc];
            const withoutCurrentWord = lettersArray.filter((letters) => letters.join('') !== word.join(''))
            const currentWord: IWord = {
                id: `${getRandomInt(0, 255)}_${word.join('' + getRandomInt(1, 135436))}_${index}`,
                direction: this.typeWord[getRandomInt(0, 2)],
                word: word.join(''),
                letterArray: word,
                possibleLinks: this.getPossibleLinks(withoutCurrentWord, word),
                linkedWords: []
            }
            newAcc.push(currentWord)
            return newAcc;
        }, [])
        return crossword;
    }
};
export default Generator