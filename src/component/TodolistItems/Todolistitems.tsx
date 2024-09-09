import {useAppSelector, useAppDispatch} from "../../store";
import {CheckBox} from "../Checkbox/Checkbox";
import * as Styled from "./style"
import {removeTodo, changeTodo, Itodos} from "../../store/todoSlice";
import {ModalWindow} from "../Modalwindow/Modalwindow";
import {AboutNote} from "../Aboutnote/Aboutnote";
import React, {useState} from "react";

import DetectiImageLight from "../../assets/image/Detective-check-footprint-light.png"
import DetectiImageDark from "../../assets/image/Detective-check-footprint-dark.png"
import {useTheme} from "../themes/Themeprovider";
interface TodoListItems{
    items: Itodos[]
}

export const TodoListItems = ({ items } : TodoListItems) => {
    const { theme, toggleTheme } = useTheme();
    const data = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch()

    const [todoId, setTodoId] = useState<number>()
    const removeNote = (id: number) => {
        dispatch(removeTodo({id: id}))
    }

    const [show, setShow] = useState(false)
    const [showAboutNoteWindow, setShowAboutNoteWindow] = useState(false)
    const handleModal = () => setShow(!show)
    const handleAboutNoteWindow = () => setShowAboutNoteWindow(!showAboutNoteWindow)
    const openChangeWindow = () => {
        setShow(!show)
    }

    const openAboutNoteWindow = () => {
        setShowAboutNoteWindow(!showAboutNoteWindow)
    }


    if(items.length === 0){
        return (
            <Styled.DetectiveImageBox>
                <img src={theme ? DetectiImageLight:DetectiImageDark}/>
                <Styled.DetectiveImageBoxTextEmpty>Empty...</Styled.DetectiveImageBoxTextEmpty>
            </Styled.DetectiveImageBox>
        )
    }

    return(
        <>
            <Styled.Notes>
                {items.map((item) => {
                    return (
                        <Styled.Note key={item.id}>
                            <Styled.TodoToolsBoxLeft>
                                <CheckBox sendId={item.id} status={item.status}/>
                                <Styled.NoteTitle style={item.status === true ? {
                                    textDecoration:"line-through",
                                    color: theme === true ? "rgba(37,37,37,0.5)" : "rgba(255,255,255,0.5)",
                                    display:"block",
                                }:{
                                    textDecoration: "none",
                                    color: theme === true ? "#000":"#fff",
                                    display:"block",
                                }}
                                    onClick={() => {
                                        setTodoId(item.id)
                                        openAboutNoteWindow()
                                    }}
                                >
                                    {item.title}
                                </Styled.NoteTitle>
                            </Styled.TodoToolsBoxLeft>
                            <Styled.TodoToolBox>
                                <Styled.TodoTool className={"icon-pen"} style={{marginRight: "10px"}}
                                                  onClick={() => {
                                                      setTodoId(item.id)
                                                      openChangeWindow()
                                                  }}></Styled.TodoTool>
                                <Styled.TodoTool className={"icon-trash"}
                                                  onClick={() => removeNote(item.id)}></Styled.TodoTool>
                            </Styled.TodoToolBox>
                        </Styled.Note>
                    )
                })}
            </Styled.Notes>
            {show && (
                <ModalWindow
                    moadalWindowTitle={"CHANGE NOTE"}
                    show={show}
                    closeModal={handleModal}
                    action={changeTodo}
                    todoId={todoId}
                />
            )}

            {showAboutNoteWindow &&(
                <AboutNote
                    todoId={todoId}
                    show={showAboutNoteWindow}
                    closeModal={openAboutNoteWindow}
                />
            )}
        </>
    )
}