import React, { useEffect } from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './style';
import { useSelector } from 'react-redux';

export default function Posts({setCurrentId}) {

    const posts = useSelector(state => state.posts);
    
    useEffect(() => {
        console.log(posts);
    }, [posts]);

    const classes = useStyles();
    
    return (

        !posts.length ? <CircularProgress /> :
            (
                <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                    {posts.map(post => (
                        <Grid key={post._id} item sm={6} xs={12}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )
    )
}
