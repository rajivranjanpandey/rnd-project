import React from 'react';
import './form.css';
import { Button, TextField } from '@mui/material';

export default function TodoForm(props) {
    const { addTodo } = props;
    const [todoInput, setTodoInput] = React.useState('');

    const onTodoSave = () => {
        if (todoInput.length) {
            addTodo(todoInput)
            setTodoInput('');
        }
    }
    return (
        <TextField
            id="outlined-controlled"
            label="Your inputs ... "
            className='todo_input'
            value={todoInput}
            InputProps={{ endAdornment: <Button color='primary' variant='outlined' onClick={onTodoSave}>Save</Button> }}
            inputProps={{ "data-testid": "todo-input" }}
            onChange={(event) => {
                setTodoInput(event.target.value);
            }}
        />
    )
}
