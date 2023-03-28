import React,{useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from './Images/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  // useDispatch use for dispatch the action to store or reducer file
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h4' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" width="60" />
      </AppBar>

      {/* grow is used for animation  */}
      <Grow in>
        <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>

      </Grow>
    </Container>
  );
}

export default App;
