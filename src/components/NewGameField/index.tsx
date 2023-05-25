/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import Grid from '../Grid';
import React, { useMemo, useState } from 'react';
import useGetWords from '../../hooks/useGetWords/useGetWords';
import { IQuestion } from '../../constants/mocka.words';
import { heightGrid, IQusetionsForSides, widhtGrid } from '../../constants/defaults';
import { TWord } from '../../hooks/useGetWords/types';
import QustionsList from '../QustionsList';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
interface IProps {
    name: string,
    description: string,
    questions: IQuestion[]
}
const NewGameField: React.FC<IProps> = ({
    name,
    description,
    questions
}): JSX.Element => {
    const [hoverWord, setHoverWord] = useState<string>()
    const [size, setSize] = useState({fromX: 0, fromY: 0, x: 35, y: 30})
    const [
        curentWords,
        exceptionWord,
        reGenerate,
    ] = useGetWords(heightGrid, widhtGrid, questions)

    const getQuestionForSides = (splittedWords: TWord[], isHorizontal: boolean): IQuestion[] => {
        const filterd = splittedWords.filter((item) => !!item[0].isHorizontal !== !!isHorizontal);
        return filterd.map((item) => {
            const question = questions.find((elem) => elem.word === item[0].word)
            return question;
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
    const getQuestionForSide: IQusetionsForSides = useMemo(() => ({
        horizontalWords: sortQuesionts(getQuestionForSides(curentWords, true)),
        verticalWords: sortQuesionts(getQuestionForSides(curentWords, false))
    }), [curentWords])
    const navigate = useNavigate()
    const saveCrossWord = () => {
        const oldStr = localStorage.getItem('listCrosswords');
        const old = JSON.parse(oldStr);
        old.push({
            name,
            description,
            words: curentWords
        })
        localStorage.setItem('listCrosswords', JSON.stringify(old))
        navigate('/Tops')
    }
    const getSize = () => {
        const size = curentWords.reduce((acc, item) => {
            let newAcc = [...acc]
            item.forEach((letter) => {
                if(letter.cell > acc[0]) newAcc[0] = letter.cell;
                if(letter.row > acc[1]) newAcc[1] = letter.row;
                if(letter.cell < acc[2]) newAcc[2] = letter.cell;
                if(letter.row < acc[3]) newAcc[3] = letter.row;
            })
            return newAcc;
        }, [-Infinity, -Infinity, Infinity, Infinity])
        console.log(size)
        console.log({
            fromX: size[2] + 2,
            fromY: size[3] + 2,
            x: size[0] + 2,
            y: size[1] + 2
        })
        setSize({
            fromX: size[2] - 2,
            fromY: size[3] - 2,
            x: size[0] + 2,
            y: size[1] + 2
        })
        
    }
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.descriptions}>
                {description}
            </div>
            <div className={styles.descriptions}>
                {`exceptions: ${exceptionWord.length}`}
                <button onClick={reGenerate} className={styles.button} style={{width: 160, marginLeft: 16}}>Перегенирировать</button>
            </div>
            <div className={styles.descriptions}>
            <button className={styles.button} onClick={() => saveCrossWord()}>Сохранить</button>
            </div>

            <div className={styles.content}>
                <div className={styles.gridContent}>
                    <Grid
                        xFrom={size.fromX}
                        xTo={size.x}
                        yFrom={size.fromY}
                        yTo={size.y}
                        words={curentWords}
                        setHoverWord={handleHoverWord}
                    />
                </div>
                <QustionsList
                    hoverWord={hoverWord}
                    horizontalWords={getQuestionForSide.horizontalWords}
                    verticalWords={getQuestionForSide.verticalWords}
                />
            </div>
        </div>
    );
};

export default NewGameField;


