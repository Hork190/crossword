/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { useParams } from 'react-router';
import { ICorssWord } from '../../constants/defaults';
import GameConcret from '../../components/GameConcret';


const PlayConcret: React.FC = (): JSX.Element => {
    const params = useParams()
    const [currentCrossWord, setCurrent] = useState<ICorssWord>()
    const [listCrossWords, setListCrossWords] = useState<ICorssWord[]>([])
    useEffect(() => {
        const strListCross = localStorage.getItem('listCrosswords')
        setListCrossWords(JSON.parse(strListCross))
    }, [params?.id])
    useEffect(() => {
        console.log(params?.id, listCrossWords.length)
        if(params?.id && listCrossWords.length) {
            console.log(listCrossWords)
            setCurrent(listCrossWords.find((item) => item.name === params?.id))
        }
    }, [params?.id, listCrossWords.length])
    useEffect(() => {
        console.log(currentCrossWord)
    }, [currentCrossWord])
    return (
        <PageLayout>
            {currentCrossWord && <GameConcret crossWord={currentCrossWord}/>}
            
        </PageLayout>
    );
};

export default PlayConcret;
