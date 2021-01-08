import { Action } from "../actions/index"

export interface TodoState {
    todos: string[];
}

const initialState = {
    todos: []
}

export const todoReducer = (state: TodoState = initialState, action: Action): TodoState => {
    switch (action.type) {
        case "ADD_TODO": {
            return { ...state, todos: [...state.todos, action.payload] };
        }
        default:
            return state;
    }
}