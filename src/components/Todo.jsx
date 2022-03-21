import React, { useState }from 'react'

import TodoForm from './TodoForm'

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo( {todos, completeTodo, removeTodo, updateTodo}) {

    // 逻辑
    // TiEdit 被点击后, 调用setEdit
    // edit.id != null 会return <TodoForm edit={edit} onSubmit={submitUpdate} />
    // 在pop的todo form中输入后调用updateTodo, 更新值
    // 然后使用setEdit, 将id赋值为null, 这样todoform就会隐藏
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick = {() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className = 'delete-icon'
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className = 'edit-icon'
                />
            </div>
        </div>
    ))
        
}

export default Todo