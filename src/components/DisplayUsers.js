import React, {useEffect, useState} from 'react';
import firebase from '../Firebase';
import TableRow from "./TableRow";
import {fieldNames} from '../model/fieldNames';
import styles from '../css/displayUser.module.css'
import TableHeader from "./TableHeader";

const DisplayUsers = () => {
    const [state, setState] = useState({data: []});

    useEffect(() => {
        const data = [];
        const db = firebase.firestore();

        return db.collection('users').orderBy('login').onSnapshot(querySnapshots => {
            querySnapshots.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    data.push(change.doc.data());
                }
            });
            setState({data});
        });
    }, []);

    return (
        <div className={styles.container}>
            <div><h1>Users' List</h1></div>
            <TableHeader fieldNames={fieldNames}/>
            <div className={styles.tableWrapper}>
                {
                    state.data.map((doc, index) =>
                        <TableRow key={index} data={doc} fieldNames={fieldNames}/>
                    )
                }
            </div>
        </div>
    );
};

export default DisplayUsers;