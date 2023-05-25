/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { ICell, TWord } from '../../hooks/useGetWords/types';
import styles from './styles.module.scss';


interface IProps {
    xFrom?: number,
    yFrom?: number,
    xTo?: number,
    yTo?: number,
    words: TWord[],
    isGame?: boolean,
    accepted?: string[],
    setHoverWord: (word: string) => void,
    handleChangeWords?: (now: ICell, letter: string) => void
}

const Grid: React.FC<IProps> = ({xFrom=0,yFrom = 0 ,xTo = 35, yTo= 30, words, isGame,accepted, setHoverWord, handleChangeWords}): JSX.Element => {
    const [cells, setCells] = useState<ICell[]>([])
    const createCell = (row:number, cell:number): ICell => ({
            id: `row_${row}_cell_${cell}`,
            row,
            cell,
            value: null,
            word: null,
            words: [],
            questions: []
    })
    const initialCells = () => {
        const initialCells = [];
        for(let row = yFrom; row < yTo; row+=1) {
            for(let cell = xFrom; cell < xTo; cell+=1) {
                initialCells.push(createCell(row, cell))
            }
        }
        return initialCells
    }
    useEffect(() => {
        setCells(initialCells())
    }, [])
    const getAccepted = (words: any[], acceptedWords: string[]) => {
        const form = words.map(item => item[0]?.word?.toLocaleLowerCase())
        const check = form?.some((word) => {
            return acceptedWords?.some((item) => item.toLocaleLowerCase() === word);
        })
        return check ? styles.accepted : ''
    }
    const getCells = (cells: ICell[], acceptedWords) => {
        return cells?.map((cell) => (
            <div
                id={cell.id}
                className={`${styles.cell} ${cell.value ? styles.select : ''} ${getAccepted(cell?.words, acceptedWords)}`}
                onMouseEnter={() => cell.value && setHoverWord(cell.word)}
                onMouseLeave={() => cell.value && setHoverWord('')}
            >
                {
                    cell?.initCell && <div
                        className={styles.cellNumber}
                    >
                        { cell.question.number }
                    </div>
                }
                {
                    (isGame && cell.value )?
                        <input
                            className={styles.inputCell}
                            onChange={(e) => handleChangeWords(cell, e.target.value)}
                            type='text'
                        />
                        : cell.value || ''
                }
                
                
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
            {getCells(cells, accepted)}
        </div>
        ))
    }, [cells, accepted, isGame]) 

    const drawWords = (listWords: TWord[]) => {

        listWords.forEach((word) => {
            word.forEach((elem, index) => {
                setCells(prev => prev.map(item => {
                    const newItem = {...item};
                    if(item.cell === elem.cell && item.row === elem.row) {
                        newItem.value = elem.value
                        newItem.word = word
                        newItem.words.push(word)
                        newItem.question = elem.question
                        newItem.questions.push(elem.question)
                        newItem.indexLetter = index;
                        if(!index) newItem.initCell = true
                    }
                    return newItem;
                }))
            })
        })
    }
    useEffect(() => {
        setCells(initialCells())
        drawWords(words)
    }, [words, xFrom, xTo, yFrom, yTo])
    return (
        <div className={styles.container_Grid}>
            {getRows}
        </div>
    );
};

export default Grid;
