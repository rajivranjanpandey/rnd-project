import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

function TodoList(props) {
    const { todos, onDeleteTodoItem } = props;
    const onDeleteClick = (itemId) => {
        onDeleteTodoItem(itemId);
    }
    return (

        <Grid item xs={12} md={6}>
            {
                todos.length > 0 &&
                <List className='todo_list'>
                    {
                        todos.map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
                                    className='todo_item'
                                    data-testid="todo-item"
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete" onClick={() => onDeleteClick(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <TurnedInIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        data-testid="title"
                                        primary={item.title}
                                    />
                                </ListItem>
                            )
                        })
                    }
                </List>
            }
        </Grid>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })),
    onDeleteTodoItem: PropTypes.func
}
export default TodoList;