import React from 'react';
import TodoList from '../../containers/todos/list'
import TodoForm from '../../containers/todos/form'

export default function Todos() {
    const [todos, setTodos] = React.useState([]);
    const addTodo = (todoInput) => {
        const lastItem = todos[todos.length - 1];
        let newItem = {
            id: 1,
            title: todoInput
        };
        if (lastItem) {
            newItem.id = lastItem.id + 1;
        }
        todos.push(newItem);
        setTodos(structuredClone(todos));

    }
    const onDeleteTodoItem = (itemId) => {
        const itemIndex = todos.findIndex(item => item.id === itemId);
        if (itemIndex >= 0) {
            todos.splice(itemIndex, 1);
            setTodos(structuredClone(todos));
        }
    }
    return (
        <>
            <h2>Todos</h2>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} onDeleteTodoItem={onDeleteTodoItem} />
        </>
    )
}
