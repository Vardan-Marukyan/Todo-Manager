import {createSlice} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";

export interface  Itodos{
    id: number
    title: string
    description: string
    date: string
    status: boolean
}

export interface  ItodosAction{
    title: string
    description: string
    date: string
    status: boolean
}

export interface ItodosState {
    todos: Itodos[]
}

const initialState:ItodosState = {
    todos: []
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action:PayloadAction<Itodos>) => {
            state.todos.push({
                title: action.payload.title,
                description: action.payload.description,
                date: action.payload.date,
                status: action.payload.status,
                id: action.payload.id
            })
        },

        changeStatus: (state, action:PayloadAction<{id:number, newStatus: boolean}> ) => {
            const todo = state.todos.find(({id}) => action.payload.id === id)
            if(todo) {
                todo.status = action.payload.newStatus
            }
        },

        changeTodo: (state, action:PayloadAction<Itodos>) => {
            const todo = state.todos.find(({id}) => action.payload.id === id)
            if(todo){
                todo.title = action.payload.title
                todo.description = action.payload.description
                todo.date = action.payload.date
                todo.status = action.payload.status
            }
        },

        removeTodo:(state, action:PayloadAction<{id:number}>) => {
            state.todos = state.todos.filter((el) => action.payload.id !== el.id)
        }

    }
})

export const {addTodos, changeStatus, removeTodo,changeTodo} = todosSlice.actions
export default todosSlice.reducer

