import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Job } from './Job'
import styles from './../styles/joblist.module.css'
import { Header } from './Header'
import { Addjob } from './Addjob'

export const Joblist = ()=>{

    const [jobs,setJobs] = useState(null);

    useEffect(()=>{
        axios.get('https://jobapplicationtracker-mxei.onrender.com/getjob').then((response)=>{
            // console.log(response.data)
            setJobs(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    const [formVisible,setFormVisible] = useState(false);

    const updateData = async()=>{
        const res = await axios.get('https://jobapplicationtracker-mxei.onrender.com/getjob');
        setJobs(res.data);
    }
    const showForm =async()=>{
        setFormVisible(!formVisible)
        await updateData();
    }

    return (
        <>
           
            <div className={styles.container}>
                <Header  showForm={showForm}/>
                {formVisible?<Addjob showForm={showForm}/>:null}
                { jobs && jobs.map((job)=>(
                    <Job job={job} updateData={updateData} />
                ))}
            </div>
        </>
    )
}