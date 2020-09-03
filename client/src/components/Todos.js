import React, { Component } from 'react'
import {Consumer} from '../context'
import Todo from './Todo'

export default class ToDos extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { todo } = value
                    return todo.map(t => <Todo todo={t} key={t.id}></Todo>)
                }}
            </Consumer>
    )
  }
}
