import axios from 'axios';
import React, { Component } from 'react'
import Question from '../Question/Question';
import './Quiz.css'

export default class Quiz extends Component {
    constructor(props){
        super(props);
        this.state={question:[],counter:0,point:0}

    }
    async componentDidMount(){
        let res=await axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
        
        this.setState({question:res.data.results})
       
    }
    // handleclick=()=>{
    //     this.setState({counter:this.state.counter+1})
    // }

    nextquestion=(e)=>{
        console.log(e)
        if(e){
            this.setState({point:this.state.point+10})
        }
        if(this.state.counter===this.state.question.length-1){
            console.log(this.state.point)
        }
        this.setState({counter:this.state.counter+1})
    }



    render() {
        console.log(this.state.question[this.state.counter])
        return (
            
            <div className="quiz">
                {
                    this.state.question.length==0?<div>loading</div>:this.state.counter==9?<div>{this.state.point}</div>:<Question onClick={this.nextquestion} question={this.state.question[this.state.counter]}/>
                }
            </div>
        )
    }
}
