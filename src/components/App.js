import React from 'react';
import DisplayUsers from './DisplayUsers'
import SearchBar from './SearchBar';
import styles from '../css/app.module.css'

const App = () => {
    return (
        <div className={styles.container}>
            <SearchBar/>
            <DisplayUsers/>
        </div>
    );
};

export default App;
