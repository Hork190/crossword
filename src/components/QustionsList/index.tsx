
import React from 'react';
import { IQuestion } from '../../constants/mocka.words';
import styles from './styles.module.scss';

interface IPropsQuestionList {
    horizontalWords: IQuestion[],
    verticalWords: IQuestion[],
    acceptedWords?: string[],
    hoverWord: string,
}

const QustionsList: React.FC<IPropsQuestionList> = ({horizontalWords, verticalWords, acceptedWords, hoverWord}): JSX.Element => {
    const isAcceptedWord = (word: string) => {
        const check = acceptedWords?.some((item) => item === word);
        return check ? styles.accepted : ''
    }
    const getListQuestion = (listQuestion: IQuestion[]) => {
        return listQuestion.map((item) => (
            <div className={`${styles.containerQuestion} ${hoverWord===item.word && styles.select} ${isAcceptedWord(item?.word)}`}>
                {`${item.number}. ${item.question}`}
            </div>
        ))
    }
    return (
        <div className={styles.container_Questions}>
            <div className={styles.columnQuesionsContainer}>
                <div className={styles.title}>Горизонтально</div>
                <div className={styles.columnQuesions}>
                    {getListQuestion(horizontalWords)}
                </div>
            </div>
            <div className={styles.columnQuesionsContainer}>
                <div className={styles.title}>Вертикально</div>
                <div className={styles.columnQuesions}>
                    {getListQuestion(verticalWords)}
                </div>
            </div>
        </div>
    );
};

export default QustionsList;
