import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    flexGrow: 1,
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  color:{
    backgroundColor: "#e7e7e7",
    
  }
};


class ButtonAppBar extends Component {
  
  constructor(props){
     
    super(props);
    this.state = {}
  }
   glossary(){
  // history.push('/');
  }
   game(){
  // history.push('/game');
  }
   hallOfFame(){
    //this.props.history.push('/');
   }
  render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles.color} >
        <Toolbar>
        <Typography variant="h6" color="#777" className={classes.grow}>
            KOMET
            <Button onClick={()=>this.props.glossary()} color="#777">{this.props.English?"Glossary":"Glossar"}</Button>
            <Button onClick={()=>this.props.game()} color="#777">Quiz</Button>
            <Button onClick={()=>this.props.hallOfFame()} color="#777">Hall of Fame</Button>
        </Typography>
          <Button onClick={()=>this.props.changeToGerman()} color="#777">{this.props.English?"German":"Deutsch"}</Button>
          <Button onClick={()=>this.props.changeToEnglish()} color="#777">{this.props.English?"English":"Englisch"}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}


export default withStyles(styles)(ButtonAppBar);