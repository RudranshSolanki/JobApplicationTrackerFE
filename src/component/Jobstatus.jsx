import React,{useState,useEffect}from "react";
import styles from './../styles/form.module.css'
import axios from "axios";
export const Jobstatus = ({showStatus,id}) =>{
    let status ='applied';
    const handleStatus = (e) =>{
        console.log(e.target.value)
        status=e.target.value;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        //update the  job status value
        const data = {jobStatus:status}
            const jsonData = JSON.stringify(data);
            console.log('use effect')
            axios.patch(`https://jobapplicationtracker-mxei.onrender.com/updateStatus/${id}`,jsonData, {headers:{
                'Content-Type': 'application/json' // Set content type as JSON
              }}).
            then((res)=>{console.log('res'+res)
                showStatus();
    
            }).
            catch((err)=>console.log('err',err))
        
    }

    return (
        <>
            <div className={styles.overlay}>
                <form className={styles.modal}>
                    <div className={styles.company}>
                        <label>Job Status: </label>
                        {/* <input className="company" onChange={handleStatus} type="text"></input> */}
                        <select id = 'status'className="company" name= 'status' onChange={handleStatus}>
                            <option value="applied">Applied</option>
                            <option value="Interview pending">Interview Pending</option>
                            <option value="Assignment Pending">Assignment Pending</option>
                            <option value="Result Pending">Result Pending</option>
                            <option value="rejected">Rejected</option>
                        </select>
                        
                    </div>
                    <div className={styles.button}>
                        <button className={styles.btn} onClick={showStatus}>Cancel</button>
                        <button className={styles.btn} onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}