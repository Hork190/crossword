/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import GameField from '../../components/GameField';
import PageLayout from '../../components/PageLayout';

const Collection: React.FC = (): JSX.Element => {
    return (
        <PageLayout>
            <GameField />
        </PageLayout>
    );
};

export default Collection;
