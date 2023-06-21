import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
export default function TodoList(props) {
    const { todos, onDeleteTodoItem } = props;
    const onDeleteClick = (itemId) => {
        onDeleteTodoItem(itemId);
    }
    return (
        <Grid item xs={12} md={6}>
            <Demo>
                <List>
                    {
                        todos.map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
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
            </Demo>
        </Grid>
    )
}
