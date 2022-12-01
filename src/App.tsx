import React from "react";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BoardList2 from './components/boardList2';
import Card from './components/card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return(
    <div>
      <div className="App">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs>
                <Item>xs</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>xs=6</Item>
              </Grid>
              <Grid item xs>
                <Item>xs</Item>
              </Grid>
            </Grid>
            <Grid>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item><BoardList2></BoardList2></Item>
                </Grid>
                <Grid item xs>
                  <Card></Card>  
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;