import React from "react";
import styles from './../styles/job.module.css'

export const Header = ({showForm}) =>{


    return (
        <>
            <div className={styles.jobcard}>
                <div className={styles.company}>
                    <h3>Comapany name</h3>
                </div>
                <div className={styles.result}>
                    <h3>Status</h3>
                </div>
                <div className={styles.date}>
                    <h3>Applied On</h3>
                </div>
                <div className={styles.add}>
                    <h3 onClick={showForm}>Add Job</h3>
                </div>
            </div>
        </>
    )
}