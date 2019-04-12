import React, {useState} from 'react';
import AddUser from './AddUser';
import styles from '../css/searchBar.module.css'

const SearchBar = () => {

    const [state, setState] = useState({open: false, msg: '', isSuccess: true});

    const showMessage = (msg, isSuccess) => {
        setState({open: true, msg, isSuccess});
        setTimeout(() => {
            setState({open: false})
        }, 5000)
    };

    return (
        <div>
            <AddUser showMessage={showMessage}/>
            {state.open &&
            <div className={`${styles.messageWrapper} ${state.isSuccess ? styles.success : styles.error}`}>
                <div>{state.msg}</div>
            </div>
            }
        </div>

    )
};

export default SearchBar;