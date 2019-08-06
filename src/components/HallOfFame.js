import React, { Component } from 'react';
import '../App.css';
import ButtonAppBar from './ButtonAppBar'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
// This constant will take a record from the database as props, to make a row in the view for it.
const Record= props=>(
    <tr>
        <td>{props.record.name} {new Date(props.record.date).getDate()}</td>
        <td>{props.record.grade}</td>
        <td>{props.record.time}</td>
    </tr>
)
//This contant will take three records and create a new table for them.
const ThreesRecord= props=>(
    <div>
        <h5 style={{marginLeft:"1%"}}>{props.date}</h5>
        <table className="table table-striped" style={{marginBottom:50}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(function(currentRecord,index){
                    return <Record record={currentRecord} key={index}/>
                })}
            </tbody>
        </table>
</div>
)

class HallOfFame extends Component {
    constructor(props){
     
        super(props);
        this.state = {
            ranking:[],
            Threes:[],
            English:JSON.parse(localStorage.getItem( "english" ))===null?true:JSON.parse(localStorage.getItem( "english" ))
             };

    }
    // requests are sent to get the top threes in every previous month and the top ten for the current month
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

        axios.get('http://localhost:4000/topThrees')
        .then(res=>{
            res.data.sort(function(a, b){
                if(a["grade"]===b["grade"]){
                    return a["seconds"]-b["seconds"]
                }
                return b["grade"]-a["grade"]
            })
            this.setState({Threes:res.data});
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

    // This will take the top ten players of the current month and make a row for every one
    listRanking(){
        return this.state.ranking.map(function(currentRecord,index){
            return <Record record={currentRecord} key={index} />;
        });
    }
    //This will take the table which contains the top three of every previous month and create a table for every tree records
    listThrees(){
        let threes=  [...this.state.Threes];
        threes.sort(function(a,b){
            return new Date(b.date)-new Date(a.date);
        })
        let tables=[];
        let counter=0;
        while(threes.length!==0){
            let tmp =[threes[0]];
            threes.splice(0,1);       
            while(threes.length!==0&&new Date(tmp[0].date).getFullYear()===new Date(threes[0].date).getFullYear()
            &&new Date(tmp[0].date).getMonth()===new Date(threes[0].date).getMonth())
            {
                tmp.push(threes[0]);
                threes.splice(0,1);
            }
            tables.push( <ThreesRecord list={tmp} date={parseInt(new Date(tmp[0].date).getMonth())+1+"/"+new Date(tmp[0].date).getFullYear()} key={counter}/>);
            counter++;
        }
        return tables;
       
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
                <table className="table table-striped" style={{marginTop:30 ,marginBottom:50}}>
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
               {this.listThrees()}
            </div>
            )
    }

}

 export default (HallOfFame);
