import React, { Component } from 'react'
import Questionbtn from '../Button/Questionbtn';

export default class Question extends Component {
    constructor(props){
        super(props);
        this.state={question:this.props.question,answer:[]}
    }
    componentDidUpdate(preivprops){
        if(this.props.question.question!==preivprops.question.question){
            this.setState({question:this.props.question})
        }
        
        console.log(preivprops);
        console.log(this.state.answer);

        
    }
    // componentDidMount(){
    //     this.setState({answer:this.randomanswer()});
    // }
    
    randomanswer=()=>{
        let arr=[this.state.question.correct_answer,this.state.question.incorrect_answers[0],this.state.question.incorrect_answers[1],this.state.question.incorrect_answers[2]]
        for (let i = 0; i < arr.length; i++) {
            let rand=Math.floor(Math.random()*arr.length)
            let temp=arr[i]
            arr[i]=arr[rand]
            arr[rand]=temp
            
        }
        return arr;

    }

    onClick=(ans)=>{
        console.log("qustion check"+ans)
        if(ans===this.state.question.correct_answer)
            this.props.onClick(true)
        else this.props.onClick(false)
    }
  
    render() {
        
        console.log('qusfaod'+this.state.question.question)
        return (
            <div>
                <h1>
                    {
                        
                    }
                    {
                        
                         this.state.question.question
                    }
                    {
                       this.randomanswer().map((btn,i)=>{
                            // console.log(btn)
                            return <Questionbtn key={i} onClick={this.onClick} answer={btn}/>
                        })
                    }
                </h1>
            </div>
        )
    }
}
