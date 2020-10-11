import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import { Typography } from '@material-ui/core';
import useStyles from './stylesApp';



const alanKey='c5837f65830d62a8cf789a936a4a51402e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() =>{
    const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


    const classes = useStyles();

    useEffect(() => {
        alanBtn({
          key: '64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage',
          onCommand: ({ command, articles, number }) => {
            if (command === 'newHeadlines') {
              setNewsArticles(articles);
              setActiveArticle(-1);
            } else if (command === 'instructions') {
              setIsOpen(true);
            } else if (command === 'highlight') {
              setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            } else if (command === 'open') {
              const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
              const article = articles[parsedNumber - 1];
    
              if (parsedNumber > articles.length) {
                alanBtn().playText('Please try that again...');
              } else if (article) {
                window.open(article.url, '_blank');
                alanBtn().playText('Opening...');
              } else {
                alanBtn().playText('Please try that again...');
              }
            }
          },
        });
      }, []);
    

    return (

        <>
           <div className={classes.logoContainer} >
          <h1 style={{fontFamily:"Segoe Print"}}>Thamoray News</h1>
           <img src="https://www.cdl.gr/media/upload-files/2016/07/cdl_creative_studio-578f54f1b8c7569182.gif" className={classes.alanLogo} alt="logo" />
           
           </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </>
    );
}
export default App;