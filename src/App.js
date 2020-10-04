import React from 'react';
import TodoInput from './components/Todoinput'
import TodoList from './components/TodoList'
import store from './store'       //store 의 index.js : todoReducer과 연결시키는 역할
import {Provider} from 'react-redux'

import Recommend from './components/Recommend'
import './App.css';

const App = () => {

  return <>
  {/* Provider는 위 폴더들을 연결해주는 역할 */}
  <Provider store = {store}>
    <div style={{width: "1000px",margin: "0 auto"}}>
      {/* <Signup/> */}
      {/* <TodoInput/>
      <TodoList/> */}
      <Recommend/>
    </div>
  </Provider>
  </>
}

export default App;
