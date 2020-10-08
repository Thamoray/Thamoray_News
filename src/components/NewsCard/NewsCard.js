import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@material-ui/core';

const NewsCard = () => {
    return (
          <Card>
            <CardActionArea>
              <CardMedia/>
              <div>
                <Typography variant="body2" color="textSecondary" component="h2"></Typography>
                <Typography variant="body2" color="textSecondary" component="h2"></Typography>
              </div>
              <Typography gutterBottom variant="h5"></Typography>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p"></Typography>
              </CardContent>
              <CardActions>
                <button size="small" color="primary"></button>
                <Typography variant="h5" color="textSecondary" component="p"></Typography>
              </CardActions>
            </CardActionArea>
          </Card>
    )
}

export default NewsCard
