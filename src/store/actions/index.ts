export type Action = { type: "ADD_TODO", payload: string };

export const addTODO = (todo: string): Action => ({
    type: "ADD_TODO",
    payload: todo
});