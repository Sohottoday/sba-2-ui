export const addTodoAction = todo => ({
    type : "ADD_TODO",
    payload : todo
})

export const toggleTodoAction = todoId => ({        // 소괄호를 주는 이유는 JSON으로 인식하기 위해
    type : "TOGGLE_TODO",
    payload : todoId
})

export const deleteTodoAction = todoId => ({
    type : "DELETE_TODO",
    payload : todoId
})

const initialState = {todos: []}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO" :
            return {...state, todos : [...state.todos, action.payload]}     // ... 은 나머지는 그대로 두고 바꾼 것만 change 하라는 의미, 즉 여기선 state(intialState) 값이 해당
        
        case "TOGGLE_TODO":
            return {...state, todos : state.todos.map(todo => todo.todoId === action.payload ? {...todo, complete : !todo.complete} : todo)}

        case "DELETE_TODO":
            return {...state, todos : state.todos.filter(todo => todo.todoId !== action.payload)}

        default:
            return state
    }
}

export default todoReducer