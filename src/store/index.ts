import { createStore } from 'redux';
import { todoReducer } from './modules/todoReducer'

export const store = createStore(todoReducer);
