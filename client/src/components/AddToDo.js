import React, { Component } from 'react'

export default class AddToDo extends Component {
    render() {
        return (
           <form>
               <input type='text'className='form-control rounded-0'placeholder='Write your todo'/>
               <button className='form-contro rounded-0 btn-secondary' type='submit'>
                    Add Your Todo
               </button>

               
           </form>
        )
    }
}
