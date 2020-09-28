import React, { useState } from 'react'
import uuid from 'uuid/v4'              //
import {} from 'react-redux'

const TodoInput = () => {
    //외부 코드를 가져올 때 이 사이에 넣으면 된다.
    // todo가 CRUD 대상(object)입니다. -> 속성이 된다.
    // es6 이전 모드는 var
    // es6 이후 let, const 두가지로 정의 변수, 상수. / 함수는 const 타입에 할당한다.
    // JSON(JavaScript Object Notation)
    // object { a, b }, array []
    // object { a:4,  b : () => {} 의 줄임말이라 보면 된다.}
    const [todo, setTodo] = useState('')        // useState() 의 ()안의 값이 todo의 타입을 결정한다.
    // {}를 줬으므로 submitForm은 기능도 될 수 있고 속성도 될 수 있다.
    // 그러나 submitForm을 기능으로 처리하기 위해 lambda 식을 작성해준다.
    const submitForm = e => {
        e.preventDefault()      // default로 적용된 것을 적용하지 말라는 의미, 내가 정의한 기능을 구현하라
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete:false
        }
        addTodo(newTodo)
        setTodo("")
    }

    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)     // 여기서 말하는 타겟 대상은 입력하는 text 칸이다. 즉 onchange로 인해 칸 안의 내용이 변화될때마다 라는 의미이다.
    }
    const addTodo = todo => {
        dispatch(addTodoAction(todo))   //dispatch : 값을 보내라는 함수     // 영속적으로 저장할 곳 state -> api -> db
    }

    return <>       
    <h1>할일 등록</h1>
    
    <form onSubmit={submitForm} method='POST'>      
        <div>
            <input type="text" name="todo" onChange={handleChange}/><br/>
            <input type="submit" value="ADD TODO"/>
        </div>

    </form>
    </>
}

export default TodoInput