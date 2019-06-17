import React, { Component } from 'react';
import '../App.css';
import ButtonAppBar from './ButtonAppBar'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Record= props=>(
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.grade}</td>
        <td>{props.record.time}</td>
    </tr>
)


class HallOfFame extends Component {
    constructor(props){
     
        super(props);
        this.state = {
            ranking:[],
            English:JSON.parse(localStorage.getItem( "english" ))===null?true:JSON.parse(localStorage.getItem( "english" ))
             };

    }
    componentDidMount(){
        axios.get('http://localhost:4000/records')
        .then(res=>{
            res.data.sort(function(a, b){
                if(a["grade"]===b["grade"]){
                    return a["seconds"]-b["seconds"]
                }
                return b["grade"]-a["grade"]
            })
            this.setState({ranking:res.data});
        })
        .catch(function(err){
            console.log(err)
        });
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
    listRanking(){
        return this.state.ranking.map(function(currentRecord,index){
            return <Record record={currentRecord} key={index} />;
        });
    }
    changeToEnglish(){
        localStorage.setItem("english", JSON.stringify(true));
        this.setState({
          English:true
        });
      }
      changeToGerman(){
        localStorage.setItem("english",JSON.stringify(false));
        this.setState({
          English:false
        });
      }
    render(){
        return(
            <div>                  
       <ButtonAppBar
           glossary={()=>this.glossary()}
           game={()=>this.game()}
          hallOfFame={()=>this.hallOfFame()}
          English={this.state.English}
          changeToEnglish={()=>this.changeToEnglish()}
          changeToGerman={()=>this.changeToGerman()}
        />
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listRanking()}
                    </tbody>
                </table>

            </div>
            )
    }

}

 export default (HallOfFame);
