/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { IWord } from '../../helpers/generator/types';
import { getRandomInt } from '../../helpers/random';
import { shuffle } from '../../helpers/shuffle';
import styles from './styles.module.scss';

interface ICell {
    id: string,
    row: number,
    cell: number,
    value: null | string,
    word: null | any,
}
interface IProps {
    x?: number
    y?: number
    words: string[]
}
type wordDirection = 'hor' | 'ver'
interface IWordElem {
    word: string,
    value: string,
    cell: number,
    row: number,
    isHorizontal: boolean
}
type TWord = IWordElem[]
type TRelatedWords = [TWord, TWord]
const splitter = 'Δ'
const Grid: React.FC<IProps> = ({x = 35, y= 30, words}): JSX.Element => {
    const [cells, setCells] = useState<ICell[]>([])
    const [countRand, setCountRand] = useState<number>(0)
    const createCell = (row:number, cell:number): ICell => ({
            id: `row_${row}_cell_${cell}`,
            row,
            cell,
            value: null,
            word: null
    })
    const initialCells = () => {
        const initialCells = [];
        for(let row = 0; row < y; row+=1) {
            for(let cell = 0; cell < x; cell+=1) {
                initialCells.push(createCell(row, cell))
            }
        }
        return initialCells
    }
    useEffect(() => {
        setCells(initialCells())
    }, [])

    const getCells = (cells: ICell[]) => {
        return cells.map((cell) => (
            <div id={cell.id} className={`${styles.cell} ${cell.value ? styles.select : ''}`}>
                {cell.value || ''}
            </div>
        ))
    }
    const getRows = useMemo(() => {
        const rows = cells?.reduce((acc, item) => {
            const newAcc = [...acc];
            if(!newAcc[item.row]) newAcc[item.row] = [item];
            else newAcc[item.row].push(item)
            return newAcc;
        }, [])
        return rows?.map((cells: ICell[], index) => (
            <div className={styles.row}>
            <div style={{width: '70px'}}>
                {`row: ${index}`}
            </div>
            {getCells(cells)}
        </div>
        ))
    }, [cells]) 
    const clear = () => {
        setCells(initialCells())
        setCountRand(0)
    }
    const checkAcceptedDrawVertical = (
        relatedLetter: IWordElem,
        word: string[],
        indexRelatedWord: number,
        listCompleteWord: TWord[],
        ): TWord=> {
            const arrForSplit = word.map((l,i) => {
                if(i === indexRelatedWord) return splitter
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
                    ...coordsForCheckDown
                ].map((coords) => {
                    const newWordElem:IWordElem = {
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
        ): TWord=> {
            const arrForSplit = word.map((l,i) => {
                if(i === indexRelatedWord) return splitter
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
                    ...coordsForCheckRight
                ].map((coords) => {
                    const newWordElem:IWordElem = {
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
        ): TWord=> {
        if(isVertical) return checkAcceptedDrawVertical(
            relatedLetter,
            word,
            indexRelatedWord,
            listCompleteWord
        )
        return checkAcceptedDrawHorizontal(
            relatedLetter,
            word,
            indexRelatedWord,
            listCompleteWord
        )
    } 
    const findRelatedWord = (oldWord: TWord, newWord: string, listCompleteWord: TWord[]): [TWord, TWord] | null => {
        const isHorizontalWord = oldWord[0].isHorizontal;
        const listLetterNewWord = newWord.split('');
        for(let i = 0; i < oldWord.length; i++) {
            const elemOldWord = oldWord[i];
            for(let j = 0; j < listLetterNewWord.length; j++) {
                const letterNewWord = listLetterNewWord[j];
                if(letterNewWord === elemOldWord.value) {
                    const isDontExceptions = checkAcceptedDraw(isHorizontalWord, elemOldWord, listLetterNewWord, j, listCompleteWord);
                    if(isDontExceptions) return [oldWord, isDontExceptions]
                }
            }
        }
    }
    const createWord = (listCompleteWord: TWord[], word: string): TWord | string => {
        if(!listCompleteWord.length) {
            return word.split('').map((letter, index) => {
                const cell = Math.floor((((x / 2) - (word.length / 2)) + index))
                const row = Math.floor(y / 2)
                const newElem: IWordElem = {
                    word,
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
            const relate = findRelatedWord(oldWord, word, listCompleteWord)
            if(relate) listRelatedWord.push(relate)
        })
        if(!listRelatedWord.length) return word
        const shuffling = shuffle(listRelatedWord)
        return shuffling[0][1]
    }

    const drawWords = (listWords: string[], listCells: ICell[]) => {
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

        listForDraw.forEach((word) => {
            word.forEach((elem) => {
                setCells(prev => prev.map(item => {
                    const newItem = {...item};
                    if(item.cell === elem.cell && item.row === elem.row) {
                        newItem.value = elem.value
                        newItem.word = word
                    }
                    return newItem;
                }))
            })
        })
    }
    useEffect(() => {
        drawWords(words, [...cells])
    }, [words])
    return (
        <div className={styles.test}>
            {getRows}
        </div>
    );
};

export default Grid;
