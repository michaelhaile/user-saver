import React from 'react'
import styles from '../css/tableHeader.module.css'

const TableHeader = (props) => {

    return (
        <div className={styles.row}>
            {props.fieldNames.map((field, index) =>
                <div key={index} className={styles.tableHeader}>{field.name}</div>)}
        </div>
    )
};

export default TableHeader;