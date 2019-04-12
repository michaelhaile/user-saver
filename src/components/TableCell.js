import React from 'react';
import styles from '../css/tableCell.module.css'

const TableCell = (props) => {
    return (
        <div className={styles.cell}>
            {!props.link && (
                <div className={styles.inside}>
                    <span className={styles.mobileHeader}>{props.fieldName}: </span>
                    <span className={styles.content}>{props.data}</span>
                </div>
            )}

            {props.link && (
                <div className={styles.inside}>
                        <span className={styles.mobileHeader}>{props.fieldName}: </span>
                        <span className={styles.content}><a target="_blank" rel="noopener noreferrer" href={props.link}>{props.data}</a></span>

                </div>
            )}
        </div>
    )
};

export default TableCell;