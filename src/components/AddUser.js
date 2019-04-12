import React, {useState} from 'react';
import axios from 'axios';
import {format} from 'date-fns'
import firebase from '../Firebase.js'
import styles from '../css/addUser.module.css';

const AddUser = (props) => {
    const [state, setState] = useState({username: ''});

    const updateInput = event => {
        setState({username: event.target.value});
    };

    const fetchUser = async event => {
        event.preventDefault();

        try {
            const response = await axios.get(`https://api.github.com/users/${state.username}`);
            saveUser(response.data);
        } catch (e) {
            props.showMessage(`User - '${state.username}' not found`);
            setState({username: ''});
        }

    };

    const saveUser = user => {
        const {name, public_repos, public_gists, followers, following, html_url} = user;
        const created_at = format(new Date(user.created_at), 'MM/DD/YYYY');
        const login = user.login.toLowerCase();

        const db = firebase.firestore();

        db.collection('users').where('login', '==', login).get().then(doc => {
            if (doc.empty) {
                db.collection('users').add({
                    login,
                    name,
                    public_repos,
                    public_gists,
                    followers,
                    following,
                    created_at,
                    html_url
                }).then(() =>
                    props.showMessage(`Success: User ${login} added to the database`, true)
                ).catch((e) => {
                    props.showMessage(`Error: Error adding User ${login} to the database`, false);
                });
            }
            else {
                props.showMessage(`Error: User ${login} exists`, false);
            }
        });

        setState({username: ''});
    };

    return (
        <div>
            <form onSubmit={fetchUser} className={styles.searchBar}>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Github's username"
                    onChange={updateInput}
                    value={state.username}
                />
            </form>
        </div>
    );
};

export default AddUser;