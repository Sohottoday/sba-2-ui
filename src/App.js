import React from 'react';
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'

const App = () => {
  return <div style={{width:"100px", margin:"0 auto"}}>
      <TodoInput/> <br/>
      <TodoList/>
    </div>
}

export default App;
