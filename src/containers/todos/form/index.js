import React from 'react';
import PropTypes from 'prop-types';
import './form.css';
import { Button, TextField } from '@mui/material';

function TodoForm(props) {
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
            InputProps={{ endAdornment: <Button className='save_button' variant='outlined' onClick={onTodoSave}>Save</Button> }}
            inputProps={{ "data-testid": "todo-input" }}
            onChange={(event) => {
                setTodoInput(event.target.value);
            }}
        />
    )
}
TodoForm.propTypes = {
    addTodo: PropTypes.func
}
export default TodoForm;