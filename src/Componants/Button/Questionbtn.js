import React, { Component } from 'react'
import './Buttonquestion.css'

export default class Questionbtn extends Component {
    constructor(props){
        super(props)
        

    }

    onClick=(e)=>{
        console.log("target"+e.target.innerText);
        this.props.onClick(e.target.innerText);
    }
    render() {
        // console.log(this.props.answer);
        return (
            <div>
                <button className="btn" onClick={this.onClick}>{this.props.answer}</button>
            </div>
        )
    }
}
