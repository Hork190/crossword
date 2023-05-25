/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import CreateQuestionForm from '../../components/CreateQuestionForm';
import NewGameField from '../../components/NewGameField';
import PageLayout from '../../components/PageLayout';
import { IQuestion } from '../../constants/mocka.words';
import styles from './styles.module.scss';

const Create: React.FC = (): JSX.Element => {
    const [isShowGenerator, setIsShowGeneraotr] = useState(false)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [listNewQuestions, setListQuestions] = useState<IQuestion[]>([])
    const handleCreate = (newQuestion: IQuestion) => {
        setListQuestions((prev) => [...prev, newQuestion])
    }
    if(isShowGenerator) {return (
        <PageLayout>
            <NewGameField
                description={description}
                name={name}
                questions={listNewQuestions}
            />
        </PageLayout>)
    }
    return (
        <PageLayout>
            <div style={{padding: 16, overflow: 'scroll', maxHeight: '600px'}}>
                <div className={styles.filed}>
                    <div className={styles.label}>Название</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.filed}>
                    <div className={styles.label}>Описание</div>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} style={{width: 340}} />
                </div>
                {
                    listNewQuestions.map((item, index) => (
                        <div className={styles.containerQuestion}>
                            <div className={styles.word}>{`Вопрос: ${item.number}`}</div>
                            <div className={styles.word}>{item.word}</div>
                            <div className={styles.question}>{item.question}</div>
                            <div className={styles.tip}>{item.tip}</div>
                            <div className={styles.detailLink}>{item.detailLink}</div>
                        </div>
                    ))
                }
            <CreateQuestionForm onCreate={handleCreate} number={listNewQuestions.length + 1}/>
            <button className={styles.button} onClick={() => setIsShowGeneraotr(true)}>Создать</button>
            </div>

        </PageLayout>
    );
};

export default Create;
