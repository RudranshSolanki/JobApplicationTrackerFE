import React,{useState} from 'react'
import styles from './../styles/job.module.css'
import axios from 'axios'
import { Jobstatus } from './Jobstatus'
export const  Job = ({job,updateData})=>{
    const [status,setStatus] = useState(false);
    const deleteJob =()=>{
        const data = {
            id:job._id
        }
        const jsonData = JSON.stringify(data);
         axios.delete(`https://jobapplicationtracker-mxei.onrender.com/deletejob/${job._id}`).then(()=>{
            updateData();
          });
    }
    const updateStatus = ()=>{
        console.log('Show Status box')
        showStatus();
    }
    const showStatus =async()=>{
        setStatus(!status)
        await updateData();
    }
    return (
        <>
           {status?<Jobstatus showStatus={showStatus} id = {job._id}/>:null}
            <div className={styles.jobcard}>
                <div className={styles.company}>
                    <h3>{job.company}</h3>
                </div>
                <div className={styles.result}>
                    <h3 onClick={updateStatus}>{job.result}</h3>
                </div>
                <div className={styles.date}>
                    <h3>{new Date(job.data).toISOString().split('T')[0]}</h3>
                </div>
                <div className={styles.add}>
                    <h3 onClick={deleteJob}>Delete Job</h3>
                </div>
            </div>
        </>
    )
}