import React, { Component } from 'react';
import '../App.css';
import ButtonAppBar from './ButtonAppBar'
import 'bootstrap/dist/css/bootstrap.css';
import SimpleTable from './SimpleTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class HallOfFame extends Component {
    constructor(props){
     
        super(props);
        this.state = {
            ranking:[],
            rows:[],
            openDialog:false,
            name:""
             }
        let id = 0;
        function createData(name, calories, fat) {
            id += 1;
            return { id, name, calories, fat};
          }
        for(var i=0;i<this.state.ranking.length;i++){
            this.state.rows.push(createData(this.state.ranking[i]["name"], this.state.ranking[i]["grade"], this.state.ranking[i]["time"]))
        }
        if(this.state.ranking.length<10){
   
            var rankingCopy=this.state.ranking;
            var item={"name":this.state.name,"grade":localStorage.getItem( "grade" ),"age":localStorage.getItem( "time" ) }
            rankingCopy.push(item)
            this.state.rows.push(createData(this.state.name, 
             localStorage.getItem( "grade" ) , localStorage.getItem( "time" ) ))
            this.setState({
                ranking:rankingCopy
            })
        }    

    }
    glossary(){
        this.props.history.push('/');
      }
         game(){
          this.props.history.push('/game');
        }
         hallOfFame(){
          this.props.history.push('/hallOfFame');
         }
    handleClose = () => {
       
         this.setState({ openDialog: false,name: document.getElementById("in").value});
       };
    render(){
        //console.log(this.rows)
        return(
            <div>
         <ButtonAppBar
       glossary={()=>this.glossary()}
       game={()=>this.game()}
       hallOfFame={()=>this.hallOfFame()}
       />
                <SimpleTable
                rows={this.state.rows}
                />
                <Dialog
                 open={this.state.openDialog}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Enter you name</DialogTitle>
                <DialogContent>
                <DialogContentText>
                Congratulation! You are from the top ten
                </DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                label="Enter your name"
                id="in"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Confirm
                </Button>
            </DialogActions>
            </Dialog>
        </div>
            )
    }

}

 export default (HallOfFame);
