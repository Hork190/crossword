import React, { useEffect } from 'react';
import {
    BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Path } from '../../constants/Paths';
import Collection from '../../pages/Collection';
import Create from '../../pages/Create';
import Tops from '../../pages/Tops';
import NotFoundPage from '../NotFoundPage';
import { Outlet } from 'react-router-dom';
// import { animals, food, sinces } from '../../constants/mocka.words';
import PlayConcret from '../../pages/PlayConcret';
import PlayRandom from '../../pages/PlayRandom';
import { animals, works, food, feels, shorts } from '../../constants/mocka.words';
// import PlayRandom from '../../pages/PlayConcret';

const Routing: React.FC = (): JSX.Element => {
    const createDefaultList = () => {
        const listCrossWords = [
            {
                name: 'животные',
                description: 'Длинное описание созданное лишь для тестирования кроссворда про животных',
                isComplete: false,
                inProgress: true,
                words: animals
            },
            {
                name: 'Профессии',
                description: 'Длинное уникальное ваываыва описание созданное лишь для тестирования кроссворда про профессии',
                isComplete: false,
                inProgress: true,
                words: works
            },
            {
                name: 'Еда',
                description: 'Длинное описание созданное лишь для тестирования кроссворда про еду - еда это круто',
                isComplete: false,
                inProgress: true,
                words: food
            },
            {
                name: 'состония',
                description: 'Длинное описание созданное лишь для тестирования кроссворда про всякие состония ',
                isComplete: false,
                inProgress: true,
                words: feels
            },
            {
                name: 'shorts',
                description: 'Длинное описание созданное лишь для тестирования короткого кроссворда',
                isComplete: false,
                inProgress: true,
                words: shorts
            },
            
        ]
        localStorage.setItem('listCrosswords', JSON.stringify(listCrossWords))
    }
    useEffect(() => {
        createDefaultList()
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />}/>
                <Route path={'/'} element={<PlayRandom />}/>
                <Route path={Path.Tops} element={<Tops />}/>
                <Route path={Path.Create} element={<Create />}/>
                <Route path={Path.Colleaction} element={<Collection />}/>
                <Route path={`${Path.Play}/*`} element={(<Outlet />)}>
                    <Route path={`${Path.PlayRandom}`} element={<PlayRandom />} />
                    <Route path={':id'} element={<PlayConcret />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
