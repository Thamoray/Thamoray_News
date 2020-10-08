import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
const alanKey='c5837f65830d62a8cf789a936a4a51402e956eca572e1d8b807a3e2338fdd0dc/stage';
const App =() =>{
    const [newArticales, setNewArticales]=useState([]);
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command, articles})=>{
                if(command==='newHeadlines'){
                   setNewArticales(articles);
                }

            }
        })
    },[])

    return (

        <div>
            <h1>
                Alan AI News Application
            </h1>
            <NewsCards articles={newArticales}/>
        </div>
    );
}
export default App;