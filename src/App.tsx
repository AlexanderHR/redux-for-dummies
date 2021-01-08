import React from 'react';
import { NewTodoInput } from '../src/components/NewTodoInput'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TodoState } from './store/modules/todoReducer';
import { addTODO } from './store/actions';

function App() {

  const todos = useSelector<TodoState, TodoState["todos"]>((state) => state.todos)
  const dispatch = useDispatch();

  const onAddTODO = (todo: string) => {
    dispatch(addTODO(todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello Redux</h2>
        <NewTodoInput addTODO={onAddTODO} />
        <br />
        <ul>
          {todos.map((note: string, i: number) => {
            return <li key={i}>{note}</li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
