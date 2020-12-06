import React from 'react'
import Input from './Input'
import List from './List'

const App = () => {
    return (
       <div className="ui container">
           <div class="ui divider"></div>
           <h1 className="ui center aligned header">Create Your Bucket List</h1>
           <Input/>
           <div class="ui divider"></div>
           <List/>
       </div>
    )
}

export default App