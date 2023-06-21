import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './index';
const props = {
    addTodo: jest.fn()
}
describe('TodoForm', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    it('should take a snapshot', () => {
        const { asFragment } = render(<TodoForm />);
        expect(asFragment(<TodoForm />)).toMatchSnapshot();
    });
    it('input value updates on user input', async () => {
        const inputValue = 'write test cases';
        const { queryByTestId } = render(<TodoForm {...props} />);
        const input = queryByTestId('todo-input');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: inputValue } });
        expect(input).toHaveValue(inputValue);
    })
    it('todo gets saved', async () => {
        const inputValue = 'write test cases';
        const { queryByTestId, queryByText } = render(<TodoForm {...props} />);
        const input = queryByTestId('todo-input');
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: inputValue } });
        const saveButton = queryByText('Save');
        expect(saveButton).toBeInTheDocument();
        fireEvent.click(saveButton);
        expect(props.addTodo).toBeCalled();
    })
});

