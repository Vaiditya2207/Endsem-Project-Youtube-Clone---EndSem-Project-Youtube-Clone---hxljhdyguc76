import { useNavigate } from "react-router-dom";
import styles from '../styles/homePage.module.css';
import  Category  from './category';
import { useState, useEffect } from 'react';

function Home(props){
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show?limit=100`, {
                method : "GET",
                headers: {
                    'accept': 'application/json',
                    'projectID': 'zlrqgz1t74xe' 
                }
            });
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [])

    const navigate = useNavigate()
    if(!data){
        <h1>Loading...</h1>
    }
    if(data){
        return (
            <div className={styles.body}>
                <Category category = "Movie" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Web Series" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Video Song" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Tv Show" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Trailer" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Documentary" data = {data} userdata = {props.userdata}/>
                <hr className={styles.horizontalRule}></hr>
                <Category category = "Short Film" data = {data} userdata = {props.userdata}/>
            </div>
        );
    }
}
export default Home;