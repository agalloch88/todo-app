import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

// using getIncompleteTodos as getIncompleteTodos(state) will return all todos existing in state which are incomplete

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);