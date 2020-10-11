import React, { useState, useEffect, createRef } from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';
import classNames from 'classnames'

import useStyles from './styles.js'

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {
  const classes = useStyles();  

  
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  
  return (
    <Card ref={elRefs[i]} className={ activeArticle === i ? classes.activeCard : classes.card}>
            <CardActionArea href={url} target="_blank">
              <CardMedia className={classes.media} image={urlToImage ||'https://cdn.dribbble.com/users/309027/screenshots/2287294/apple-news-parallax-large.gif' }/>
              <div className={classes.details}>
    <Typography variant="body2" color="textSecondary" component="h2">{new Date(publishedAt).toDateString()}</Typography>
    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
              </div>
    <Typography className={classes.title} gutterBottom variant="h6">{title}</Typography>
              <CardContent>
  <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
              </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" href={url}>Learn More</Button>
                <Typography variant="h5" color="textSecondary" component="p">{i+1}</Typography>
              </CardActions>     
          </Card>
    )
}

export default NewsCard
