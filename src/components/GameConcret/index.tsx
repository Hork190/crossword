/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Grid from '../Grid';
import React, { useEffect, useMemo, useState } from 'react';
import { IQuestion } from '../../constants/mocka.words';
import { ICorssWord, IQusetionsForSides } from '../../constants/defaults';
import { ICell, TWord } from '../../hooks/useGetWords/types';
import QustionsList from '../QustionsList';
import styles from './styles.module.scss';

interface IPropsGameConcret {
    crossWord: ICorssWord
}

const GameConcret: React.FC<IPropsGameConcret> = ({crossWord}): JSX.Element => {
    if(!crossWord) return (<div>loading</div>);
    const [size, setSize] = useState({fromX: 0, fromY: 0, x: 35, y: 30})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAccepted, setIsAccepted] = useState<boolean>(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fullfieldCells, setFullfieldCells] = useState<ICell[]>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoverWord, setHoverWord] = useState<string>('')
    const getQuestionForSides = (splittedWords: TWord[], isHorizontal: boolean): IQuestion[] => {
        const filterd = splittedWords.filter((item) => !!item[0].isHorizontal !== !!isHorizontal);
        return filterd.map((item) => {
            return item[0].question;
        })
    }
    const getSize = () => {
        const size = crossWord.words.reduce((acc, item) => {
            let newAcc = [...acc]
            item.forEach((letter) => {
                if(letter.cell > acc[0]) newAcc[0] = letter.cell;
                if(letter.row > acc[1]) newAcc[1] = letter.row;
                if(letter.cell < acc[2]) newAcc[2] = letter.cell;
                if(letter.row < acc[3]) newAcc[3] = letter.row;
            })
            return newAcc;
        }, [-Infinity, -Infinity, Infinity, Infinity])
        setSize({
            fromX: size[2] - 2,
            fromY: size[3] - 2,
            x: size[0] + 2,
            y: size[1] + 2
        })
        
    }
    const sortQuesionts = (listQuestions: IQuestion[]): IQuestion[] => {
        return listQuestions.sort((a, b) => {
            return a.number - b.number
        })
    }
    const handleHoverWord = (word: any) => {
        setHoverWord(word[0]?.word)
    }
    const handleChangeWords = (now: ICell, value: string) => {
        setFullfieldCells((prev) => {
            if(value) {
                const withNewItem = [{...now, current: value}, ...prev]
                return withNewItem
            }
            const filtred = prev.filter((old) => old.cell === now.cell && now.row === old.row ? false : true)
            console.log(filtred)
            return filtred
        })
    }
    const getAcceptedWords = useMemo(() => {
        if(!crossWord || !crossWord?.words || !fullfieldCells?.length) return [];
        const {words} = crossWord;
        const accetedWords = words.filter((item) => {
            const isAccepterdWord = item.every((letter) => {
                const check = fullfieldCells.find((cell) => cell.cell === letter.cell && cell.row === letter.row);
                return !!check
            })
            return !!isAccepterdWord
        })
        const listWords = accetedWords.map((word) => {
            return word[0]?.word;
        })
        return listWords;
    }, [crossWord, fullfieldCells])
    useEffect(() => {
        console.log('getAcceptedWords', getAcceptedWords)
        console.log('fullfieldCells', fullfieldCells)
    }, [getAcceptedWords, fullfieldCells])
    // useEffect(() => {
    //     console.log('fullfieldCells', fullfieldCells)
    // }, [fullfieldCells])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getQuestionForSide: IQusetionsForSides = useMemo(() => ({
        horizontalWords: sortQuesionts(getQuestionForSides(crossWord.words, true)),
        verticalWords: sortQuesionts(getQuestionForSides(crossWord.words, false))
    }), [crossWord.words])
    useEffect(() => {
        if(crossWord) getSize()
    }, [crossWord])
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {crossWord.name}
            </div>
            <div className={styles.descriptions}>
                {crossWord.description}
            </div>
            {/* <div className={styles.descriptions}>
                <button className={styles.button} onClick={() => setIsAccepted((prev) => !prev)}>{isAccepted ? 'Продолжить' : 'Проверить'}</button>
            </div> */}
            <div className={styles.content}>
                <div className={styles.gridContent}>
                    <Grid
                        xFrom={size.fromX}
                        xTo={size.x}
                        yFrom={size.fromY}
                        yTo={size.y}
                        accepted={getAcceptedWords}
                        words={crossWord.words}
                        isGame={!isAccepted}
                        setHoverWord={handleHoverWord}
                        handleChangeWords={handleChangeWords}
                    />
                </div>
                <QustionsList
                    hoverWord={hoverWord}
                    acceptedWords={getAcceptedWords}
                    horizontalWords={getQuestionForSide.horizontalWords}
                    verticalWords={getQuestionForSide.verticalWords}
                />
            </div>
        </div>
    );
};

export default GameConcret;
