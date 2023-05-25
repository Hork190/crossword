/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Header from '../Header';
import styles from './styles.module.scss';
interface IProps {
    children?: React.ReactNode;
}

const PageLayout: React.FC<IProps> = ({children}): JSX.Element => {
    return (
        <div className={styles.pageLayout}>
            <Header />
            {children}
        </div>
    );
};

export default PageLayout;
