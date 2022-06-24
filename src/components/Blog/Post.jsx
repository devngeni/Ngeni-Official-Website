import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import classes from './Post.module.css'

function Post(props) {
    let post = props.post
    console.log('props', props); 
    console.log(post.updatedAt);
    return (
        <li className={classes.item}>
        <Card
        sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }}>
        <CardMedia 
        component="img"
        image={post.image}
        />
        
        <CardContent>
            <Typography variant='h3' component="div">
                {post.title}
            </Typography>
            <Typography variant='body2' color='secondary'>
                {post.description}
            </Typography>
            <Typography variant='body' color='secondary'>
                {post.updatedAt}
            </Typography>
        </CardContent>
    </Card>
    </li>
    )
}
export default Post
