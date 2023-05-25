
import Grid from '../Grid';
import React, { useEffect, useState } from 'react';
import Generator from '../../helpers/generator';
import { IWord } from '../../helpers/generator/types';
import { listWord } from '../../constants/mocka.words';

const App: React.FC = (): JSX.Element => {
    const [words, setWords] = useState<IWord[]>([]);
    return (
        <div>
            Test
            {/* <Grid words={listWord} /> */}
        </div>
    );
};

export default App;
