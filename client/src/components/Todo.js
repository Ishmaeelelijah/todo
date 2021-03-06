import React, { Component } from 'react'
import {Consumer} from '../context'

export default class ToDo extends Component {
    style = () => {
        const {complete } = this.props.todo
        return { textDecoration: complete ? 'line-through' : 'none'}
    }
   
    done = (id ,dispatch) => {
        dispatch({type: "DONE" , payload: id})
    }

    remove = (id ,dispatch) => {
        dispatch({type: "REMOVE" , payload: id})
    }


    render() {
        const { title,id  } = this.props.todo
        return (
        <Consumer>{value=>{
            const {dispatch} = value
            return  <h3 className='text-dark text-center p-1 bg-light border-bottom border-top' style={this.style()}>
                <i className='fas fa-times-circle fa-sm float-left m-1 text-danger' onClick={this.remove.bind(this,id,dispatch)}></i> {title}
            <input type='checkbox' className='m-2 float-right' onChange={this.done.bind(this,id,dispatch)}/>
        </h3>
        }}</Consumer>
                
          
           
        )
    }
}
