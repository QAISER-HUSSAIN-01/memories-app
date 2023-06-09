import React, { useState,useEffect } from 'react';
import useStyles from './style';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPosts , updatePost} from '../../actions/posts';

export default function Form({ currentId, setCurrentId }) {
    const post = useSelector(state => currentId ? state.posts.find((p) => p._id == currentId ) : null)
    const dispatch = useDispatch();
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })

    useEffect(()=>{
     if(post) setPostData(post);
    },[post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            console.log(currentId);
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPosts(postData))
        }
        clear();
    }
    const clear = () => {
       setCurrentId(null)
       setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Update':'Create'} a Memories</Typography>
                <TextField fullWidth name='creator' variant="outlined" label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField fullWidth name='title' variant="outlined" label="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField fullWidth name='tags' variant="outlined" label="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <TextField fullWidth name='message' variant="outlined" label="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color='primary' size="large" type="submit" fullWidth >Submit</Button>
                <Button variant="contained" color='secondary' size="small" fullWidth onClick={clear}>Clear</Button>

            </form>

        </Paper>
    )
}
