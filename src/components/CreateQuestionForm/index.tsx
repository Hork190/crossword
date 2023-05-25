/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { IQuestion } from '../../constants/mocka.words';
import styles from './styles.module.scss';
interface IProps {
    onCreate: (question: IQuestion) => void,
    number: number,
}

const CreateQuestionForm: React.FC<IProps> = ({onCreate, number}): JSX.Element => {
    const [word, setWord] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [tip, setTip] = useState<string>('')
    const [detailLink, setDetailLink] = useState<string>('')
    // word: string,
    // question: string,
    // tip: string,
    // detailLink?: string,
    // number: number,
    return (
        <div className={styles.container_createQuestionForm}>
            <div className={styles.filed}>
                <div className={styles.label}>Слово</div>
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
            </div>
            <div className={styles.filed}>
                <div className={styles.label}>Вопрос</div>
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} style={{width: 340}} />
            </div>
            <div className={styles.filed}>
                <div className={styles.label}>Подсказка</div>
                <input type="text" value={tip} onChange={(e) => setTip(e.target.value)} style={{width: 340}}/>
            </div>
            <div className={styles.filed}>
                <div className={styles.label}>Дополнительная ссылка</div>
                <input type="text" value={detailLink} onChange={(e) => setDetailLink(e.target.value)} style={{width: 340}}/>
            </div>
            <button className={styles.button} onClick={() => {
                onCreate({
                    word,
                    question,
                    tip,
                    detailLink,
                    number,  
                })
                setWord('')
                setQuestion('')
                setTip('')
                setDetailLink('')
            }}>Добавить</button>
        </div>
    );
};

export default CreateQuestionForm;
