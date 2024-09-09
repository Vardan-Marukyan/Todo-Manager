import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {Itodos, ItodosAction} from "../../store/todoSlice";

export interface IModal{
    todoId?: number
    moadalWindowTitle: string
    show: boolean
    closeModal: () => void
    action: ActionCreatorWithPayload<Itodos>;
}

export interface IAboutNoteWindow {
    todoId?: number
    show: boolean
    closeModal: () => void
}