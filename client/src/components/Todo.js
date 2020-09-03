import React, { Component } from 'react'
import {Consumer} from '../context'

export default class ToDo extends Component {
    style = () => {
        const {complete } = this.props.todo
        return { textDecoration: complete ? 'line-through' : 'none'}
    }
    toggle = (id, dispatch) => {
        dispatch({ type:'TOGGLE', payload:id })
    }
    render() {
        const { title, id } = this.props.todo
        return (
            <Consumer>{value=> {
                const { dispatch } = value
                return  <h3 className='text-dark text-center p-1 bg-light border-bottom border-top' style={this.style()}>
                {title}
                <input type='checkbox' className='m-2 float-right' onChange={this.toggle.bind(this, id,dispatch)}/>
            </h3>
            }}
            </Consumer>
        )
    }
}
