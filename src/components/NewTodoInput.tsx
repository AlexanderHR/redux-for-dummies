import React, { ChangeEvent, FC, useRef, useState } from 'react';
import '../components/NewTodoInput.css';

interface NewTodoInputProps {
    addTODO(todo: string): void;
}

export const NewTodoInput: FC<NewTodoInputProps> = ({ addTODO }) => {

    const [todo, setTodo] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const updateTODO = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const onAddTodoClick = () => {
        setTodo("");
        addTODO(todo);
        inputRef.current?.focus();
    }
    return (
        <>
            <input className="input__fancy" ref={inputRef} onChange={updateTODO} type="text" name="todo" placeholder="TODO" value={todo}></input>
            <br />
            <button className="button__fancy" onClick={onAddTodoClick}>Add TODO item</button>
        </>
    )
}