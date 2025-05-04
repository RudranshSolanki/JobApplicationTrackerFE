import React,{useState,useEffect}from "react";
import styles from './../styles/form.module.css'
import axios from 'axios'
export const Addjob = ({showForm}) =>{
    const [formData,setformData] = useState(null);
    let company;
    let date;
    const handleCompany = (e) =>{
        console.log(e.target.value)
         company=e.target.value;
    }
    const handleDate = (e) =>{
        console.log(e.target.value)
        date = e.target.value;
    }
    const handSubmit = (e)=>{
        e.preventDefault();
         setformData({
            company: company,
            date:date
        })
        
    }
    useEffect(()=>{
        console.log(formData);
        const jsonData = JSON.stringify(formData);
        console.log(jsonData)
        axios.post('https://jobapplicationtracker-mxei.onrender.com/postjob',jsonData, {headers:{
            'Content-Type': 'application/json' // Set content type as JSON
          }}).
        then((res)=>{console.log('res'+res)
            showForm();

        }).
        catch((err)=>console.log('err',err))
        // here i will send job data to server
    },[formData]);
    
    return (
        <>
            <div className={styles.overlay}>
                <form className={styles.modal}>
                    <div className={styles.company}>
                        <label>Company Name: </label>
                        <input className="company" onChange={handleCompany} type="text"></input>
                    </div>
                    
                    <div className={styles.date}>
                        <label>Applied On: </label>
                        <input className="date"  onChange={handleDate} type="date"></input>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.btn} onClick={showForm}>Cancel</button>
                        <button className={styles.btn} onClick={handSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}