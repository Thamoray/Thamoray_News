import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';

import useStyles from './styles.js'

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage }, i}) => {
  const classes = useStyles();  
  
  return (
          <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
              <CardMedia className={classes.media} image={urlToImage ||'https://recreationalpotshops.com/wp-content/uploads/2015/02/news-button.jpg' }/>
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
