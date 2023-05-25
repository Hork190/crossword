
import Grid from '../Grid';
import React, { useMemo, useState } from 'react';
import useGetWords from '../../hooks/useGetWords/useGetWords';
import { IQuestion, listWord } from '../../constants/mocka.words';
import { heightGrid, IQusetionsForSides, widhtGrid } from '../../constants/defaults';
import { TWord } from '../../hooks/useGetWords/types';
import QustionsList from '../QustionsList';
import styles from './styles.module.scss';

const GameField: React.FC = (): JSX.Element => {
    const [hoverWord, setHoverWord] = useState<string>()
    const [
        curentWords,
        exceptionWord,
        reGenerate,
    ] = useGetWords(heightGrid, widhtGrid, listWord)

    const getQuestionForSides = (splittedWords: TWord[], isHorizontal: boolean): IQuestion[] => {
        const filterd = splittedWords.filter((item) => !!item[0].isHorizontal !== !!isHorizontal);
        return filterd.map((item) => {
            const question = listWord.find((elem) => elem.word === item[0].word)
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
    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                {`exceptions: ${exceptionWord.length}`}
                <button onClick={reGenerate}>update</button>
            </div>
            <div className={styles.content}>
                <Grid
                    words={curentWords}
                    setHoverWord={handleHoverWord}
                />
                <QustionsList
                    hoverWord={hoverWord}
                    horizontalWords={getQuestionForSide.horizontalWords}
                    verticalWords={getQuestionForSide.verticalWords}
                />
            </div>
        </div>
    );
};

export default GameField;


