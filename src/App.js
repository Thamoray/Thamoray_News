import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';


import useStyles from './stylesApp';



const alanKey='c5837f65830d62a8cf789a936a4a51402e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() =>{
    const [newArticales, setNewArticales]=useState([]);
    const classes = useStyles();

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

        <>
           <div className={classes.logoContainer} >
           <img src="https://www.netclipart.com/pp/m/131-1316863_search-png-images-voice-search-png.png" className={classes.alanLogo} alt="logo" />
           </div>
            <NewsCards articles={newArticales}/>
        </>
    );
}
export default App;