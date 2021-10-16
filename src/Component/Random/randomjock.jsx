import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './randomjock.css'
export default function Randomjock() {
      const [joke,setjoke]=useState(null);
      const [fetching,setfetching]=useState(false);
    useEffect(()=>{
        
        const RandomJoke=async()=>{
            const result=await axios(" https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general");
            console.log(result.data)
           setjoke(`${result.data[0].setup} ${result.data[0].punchline}`);
        }
        RandomJoke();

    },[fetching])
    return (
        <div className="random">
            <div className="card">
                <div className="subcard">
                <h2>{joke}</h2>
                <button onClick={()=>setfetching(!fetching)}>ADD Another</button>
                </div>
            </div>
            
        </div>
    )
}
