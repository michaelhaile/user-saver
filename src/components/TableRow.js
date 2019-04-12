import React from 'react'
import TableCell from './TableCell';
import styles from '../css/tableRow.module.css'

const TableRow = (props) => {

    return (
        <div className={styles.row}>
            {
                props.fieldNames.map((field, index) =>
                <TableCell key={index}
                           data={props.data[field.name]}
                           fieldName={field.name}
                           link={props.data[field.link]}/>
            )}
            </div>
    )
};

export default TableRow;