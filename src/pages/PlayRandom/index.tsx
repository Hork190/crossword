/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { useParams } from 'react-router';
import { ICorssWord } from '../../constants/defaults';
import GameConcret from '../../components/GameConcret';
import { getRandomInt } from '../../helpers/random';


const PlayRandom: React.FC = (): JSX.Element => {
    const params = useParams()
    const [currentCrossWord, setCurrent] = useState<ICorssWord>()
    const [listCrossWords, setListCrossWords] = useState<ICorssWord[]>([])
    useEffect(() => {
        const strListCross = localStorage.getItem('listCrosswords')
        setListCrossWords(JSON.parse(strListCross))
    }, [params?.id])
    useEffect(() => {
        if(listCrossWords.length) {
            setCurrent(listCrossWords[getRandomInt(0, listCrossWords?.length)])
        }
    }, [listCrossWords.length])
    useEffect(() => {
        console.log(currentCrossWord)
    }, [currentCrossWord])
    return (
        <PageLayout>
            {currentCrossWord && <GameConcret crossWord={currentCrossWord}/>}
            
        </PageLayout>
    );
};

export default PlayRandom;
