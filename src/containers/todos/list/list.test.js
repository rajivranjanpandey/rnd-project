import { fireEvent, render, screen, within } from "@testing-library/react"
import TodoList from "."
const props = {
    todos: [
        {
            id: 1,
            title: 'Learn React'
        },
        {
            id: 2,
            title: 'Learn Javascript'
        }
    ],
    onDeleteTodoItem: jest.fn()
}
describe('TodoList', () => {
    it('Check todolist rendering', () => {
        const { asFragment } = render(<TodoList {...props} />)
        expect(asFragment(<TodoList />)).toMatchSnapshot();
    });
    it('Check deletion of todolist', () => {
        render(<TodoList {...props} />);
        const mappedTodos = screen.getAllByTestId('todo-item').map((item) => ({
            title: within(item)
                .getByTestId('title')
                .textContent,
            deleteButton: within(item)
                .getByRole('button')
        }));
        const deleteElement = mappedTodos.find(item => item.title === 'Learn React').deleteButton;
        fireEvent.click(deleteElement);
        expect(props.onDeleteTodoItem).toBeCalled();
    })
})