/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IQuestion } from '../../constants/mocka.words';

import { shuffle } from '../../helpers/shuffle';
import { IWordElem, TWord } from './types';

type TUseGetWords = [
    TWord[],
    string[],
    () => void,
    (words: IQuestion[]) => void
]
const splitter = 'Δ'
const useGetWords = (height: number, width: number, words: IQuestion[]): TUseGetWords => {
    const [rawWords, setRawWords] = useState<IQuestion[]>(() => words)
    const [curentWords, setCurrentWords] = useState<TWord[]>([])
    const [exceptionWord, setExceptionWord] = useState<string[]>([])
    const checkAcceptedDrawVertical = (
        relatedLetter: IWordElem,
        word: string[],
        indexRelatedWord: number,
        listCompleteWord: TWord[],
        question: IQuestion
        ): TWord=> {
            let symbolRelated
            const arrForSplit = word.map((l,i) => {
                if(i === indexRelatedWord) {
                    symbolRelated = l;
                    return splitter
                }
                return l
            })
            const strForSplit = arrForSplit.join('');
            const upAndDown = strForSplit.split(splitter);
            const up = upAndDown[0].split('');
            const down = upAndDown[1].split('');
            const coordsForCheckUp = up.map((l, i): [number, number, string] => {
                const defaultX = relatedLetter.cell;
                const defaultY = relatedLetter.row;
                const x = defaultX;
                const y = defaultY - (up.length - i)
                return [x, y, l]
            })
            const coordsForCheckDown = down.map((l, i): [number, number, string] => {
                const defaultX = relatedLetter.cell;
                const defaultY = relatedLetter.row;
                const x = defaultX;
                const y = defaultY + (i + 1);
                return [x, y, l]

            })
            const checkExceptionUp = listCompleteWord.find((completeWord) => {
                const listCheckedCoords = coordsForCheckUp.map((checkCoords) => {
                    const xCoords = checkCoords[0];
                    const yCoords = checkCoords[1];
                    return [
                        [xCoords, yCoords],
                        [xCoords - 1, yCoords],
                        [xCoords + 1, yCoords],
                        [xCoords, yCoords - 1],

                    ]
                })
                const listCheckedCoordsFlat = listCheckedCoords.flat()
                const test = completeWord.find((letter) => {
                    return listCheckedCoordsFlat.some((check) => check[0] === letter.cell && check[1] === letter.row)
                })
                return test
            })

            const checkExceptionDown = listCompleteWord.find((completeWord) => {
                const listCheckedCoords = coordsForCheckDown.map((checkCoords) => {
                    const xCoords = checkCoords[0];
                    const yCoords = checkCoords[1];
                    return [
                        [xCoords, yCoords],
                        [xCoords - 1, yCoords],
                        [xCoords + 1, yCoords],
                        [xCoords, yCoords + 1],

                    ]
                })
                const listCheckedCoordsFlat = listCheckedCoords.flat()
                const test = completeWord.find((letter) => {
                    return listCheckedCoordsFlat.some((check) => check[0] === letter.cell && check[1] === letter.row)
                })
                return test
            })
            if(!checkExceptionUp && !checkExceptionDown) {
                const newWord: TWord = [
                    ...coordsForCheckUp,
                    [relatedLetter.cell as number, relatedLetter.row  as number, relatedLetter.value as string] as [number, number, string],
                    ...coordsForCheckDown
                ].map((coords) => {
                    const newWordElem:IWordElem = {
                            question,
                            word: word.join(''),
                            value: coords[2],
                            cell: coords[0],
                            row: coords[1],
                            isHorizontal: false
                    }
                    return newWordElem
                })
                return newWord
            };
            return null;
    }
    const checkAcceptedDrawHorizontal = (
        relatedLetter: IWordElem,
        word: string[],
        indexRelatedWord: number,
        listCompleteWord: TWord[],
        question: IQuestion
        ): TWord=> {
            let symbolRelated
            const arrForSplit = word.map((l,i) => {
                if(i === indexRelatedWord) {
                    symbolRelated = l;
                    return splitter
                }
                return l
            })
            const strForSplit = arrForSplit.join('');
            const upAndDown = strForSplit.split(splitter);
            const left = upAndDown[0].split('');
            const right = upAndDown[1].split('');
            const coordsForCheckLeft = left.map((l, i): [number, number, string] => {
                const defaultX = relatedLetter.cell;
                const defaultY = relatedLetter.row;
                const x = defaultX  - (left.length - i);
                const y = defaultY;
                return [x, y, l]
            })
            const coordsForCheckRight = right.map((l, i): [number, number, string] => {
                const defaultX = relatedLetter.cell;
                const defaultY = relatedLetter.row;
                const x = defaultX + (i + 1);
                const y = defaultY;
                return [x, y, l]

            })
            const checkExceptionLeft = listCompleteWord.find((completeWord) => {
                const listCheckedCoords = coordsForCheckLeft.map((checkCoords) => {
                    const xCoords = checkCoords[0];
                    const yCoords = checkCoords[1];
                    return [
                        [xCoords, yCoords],
                        [xCoords, yCoords - 1],
                        [xCoords, yCoords + 1],
                        [xCoords - 1, yCoords],

                    ]
                })
                const listCheckedCoordsFlat = listCheckedCoords.flat()
                const test = completeWord.find((letter) => {
                    return listCheckedCoordsFlat.some((check) => check[0] === letter.cell && check[1] === letter.row)
                })
                return test
            })

            const checkExceptionRight = listCompleteWord.find((completeWord) => {
                const listCheckedCoords = coordsForCheckRight.map((checkCoords) => {
                    const xCoords = checkCoords[0];
                    const yCoords = checkCoords[1];
                    return [
                        [xCoords, yCoords],
                        [xCoords, yCoords - 1],
                        [xCoords, yCoords + 1],
                        [xCoords + 1, yCoords],

                    ]
                })
                const listCheckedCoordsFlat = listCheckedCoords.flat()
                const test = completeWord.find((letter) => {
                    return listCheckedCoordsFlat.some((check) => check[0] === letter.cell && check[1] === letter.row)
                })
                return test
            })
            if(!checkExceptionLeft && !checkExceptionRight) {
                const newWord: TWord = [
                    ...coordsForCheckLeft,
                    [relatedLetter.cell as number, relatedLetter.row  as number, relatedLetter.value as string] as [number, number, string],
                    ...coordsForCheckRight
                ].map((coords) => {
                    const newWordElem:IWordElem = {
                            question,
                            word: word.join(''),
                            value: coords[2],
                            cell: coords[0],
                            row: coords[1],
                            isHorizontal: true
                    }
                    return newWordElem
                })
                return newWord
            };
            return null;
    } 
    const checkAcceptedDraw = (
        isVertical: boolean,
        relatedLetter: IWordElem,
        word: string[],
        indexRelatedWord: number,
        listCompleteWord: TWord[],
        question: IQuestion
        ): TWord=> {
        if(isVertical) return checkAcceptedDrawVertical(
            relatedLetter,
            word,
            indexRelatedWord,
            listCompleteWord,
            question
        )
        return checkAcceptedDrawHorizontal(
            relatedLetter,
            word,
            indexRelatedWord,
            listCompleteWord,
            question
        )
    } 
    const findRelatedWord = (oldWord: TWord, question: IQuestion, listCompleteWord: TWord[]): [TWord, TWord] | null => {
        const isHorizontalWord = oldWord[0].isHorizontal;
        const listLetterNewWord = question.word.split('');
        for(let i = 0; i < oldWord.length; i++) {
            const elemOldWord = oldWord[i];
            for(let j = 0; j < listLetterNewWord.length; j++) {
                const letterNewWord = listLetterNewWord[j];
                if(letterNewWord === elemOldWord.value) {
                    const isDontExceptions = checkAcceptedDraw(isHorizontalWord, elemOldWord, listLetterNewWord, j, listCompleteWord, question);
                    if(isDontExceptions) return [oldWord, isDontExceptions]
                }
            }
        }
    }
    const createWord = (listCompleteWord: TWord[], question: IQuestion): TWord | string => {
        if(!listCompleteWord.length) {
            return question.word.split('').map((letter, index) => {
                const cell = Math.floor((((width / 2) - (question.word.length / 2)) + index))
                const row = Math.floor(height / 2)
                const newElem: IWordElem = {
                    question,
                    word: question.word,
                    value: letter,
                    cell, 
                    row,
                    isHorizontal: true
                }
                return newElem
            })
        }
        const listRelatedWord: [TWord, TWord][] = []
        listCompleteWord.forEach((oldWord) => {
            const relate = findRelatedWord(oldWord, question, listCompleteWord)
            if(relate) listRelatedWord.push(relate)
        })
        if(!listRelatedWord.length) return question.word
        const shuffling = shuffle(listRelatedWord)
        return shuffling[0][1]
    }
    const drawWords = (listWords: IQuestion[]) => {
        listWords = shuffle(listWords)
        const newListWord: [TWord[], string[]] = listWords.reduce((list: [TWord[], string[]], word) => {
            const listOldWord = list[0]
            const listExceptions = list[1]
            const newWord = createWord(listOldWord, word)
            if(typeof newWord === 'string')
                return [listOldWord, [newWord, ...listExceptions]]
            return [[newWord, ...listOldWord], listExceptions]
        }, [[], []])
        const listForDraw = newListWord[0];
        setCurrentWords(listForDraw)
        setExceptionWord(newListWord[1])
    }
    const reGenerate = () => {
        setRawWords((prev) => shuffle(prev));
    }
    useEffect(() => {
        if(rawWords?.length) drawWords(rawWords)
    }, [rawWords])
    return [
        curentWords,
        exceptionWord,
        reGenerate,
        setRawWords
    ]
};

export default useGetWords;
