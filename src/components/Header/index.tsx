/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router';
import { Path } from '../../constants/Paths';
import styles from './styles.module.scss';

const Header: React.FC = (): JSX.Element => {
    const navigator = useNavigate();
    // Tops
    // Create
    // Colleaction
    // Play
    return (
        <div className={styles.container_header}>
            <div className={styles.right}>
                <div>Cross</div>
                <div>The Word</div>
            </div>
            <div className={styles.content}>
                <div onClick={() => navigator(`${Path.Play}/random`)} className={styles.navigate}>Сыграть</div>
                <div onClick={() => navigator(Path.Create)} className={styles.navigate}>Создать</div>
                <div onClick={() => navigator(Path.Tops)} className={styles.navigate}>Топы</div>
                <div className={`${styles.navigate} ${styles.disabled}`}>Моя коллекция</div>
            </div>
            <div className={styles.left}>
                <div className={`${styles.navigate} ${styles.disabled}`}>Авторизация</div>
            </div>
        </div>
    );
};

export default Header;
