// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function App() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>          <Button variant="contained" color="secondary">
//   Secondary
// </Button></Paper>

//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }






import React, { Component } from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Drawer , List , ListItem , ListItemIcon , ListItemText } from '@material-ui/core'
import {BrowserRouter as Router, Switch , Route , Link} from 'react-router-dom'
// import { Paper } from '@material-ui/core'

const styles = makeStyles((theme)=>{



})

 class App extends Component {



  render() {

    const styless = styles()

    return (
      <Router>
<div style={{display:'flex'}}>

<Drawer
style={{width:'240px'}}
varinat="persistent"
anchor='left' 
open={true} 
classes={{paper:styless.drawerPaper}}

>
<List>

  
</List>
  
      </Drawer>

</div>

      </Router>
     
    )
  }
}

export default App

