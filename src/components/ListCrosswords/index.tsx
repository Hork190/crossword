/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ICorssWord } from '../../constants/defaults';


const ListCrosswords: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const [listCrossWords, setListCrossWords] = useState<ICorssWord[]>([])
    useEffect(() => {
        const strListCross = localStorage.getItem('listCrosswords')
        setListCrossWords(JSON.parse(strListCross))
    }, [])
    return (
        <div className={styles.container_ListCrosswords}>
            {
                listCrossWords.map((item) => (
                    <div className={styles.containerCrossWord}>
                        <div className={styles.title}>{item.name}</div>
                        <div className={styles.description}>{item.description}</div>
                        <button className={styles.button} onClick={() => navigate(`/Play/${item.name}`)}>Играть</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ListCrosswords;
