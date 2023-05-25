/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ListCrosswords from '../../components/ListCrosswords';
import PageLayout from '../../components/PageLayout';

const Tops: React.FC = (): JSX.Element => {
    return (
        <PageLayout>
            <ListCrosswords />
        </PageLayout>
    );
};

export default Tops;
