import {IModal} from "../config/types";
import React, {useEffect, useState} from "react";
import * as Styled from "./style"
import {useAppSelector, useAppDispatch} from "../../store";

export  const ModalWindow = ({todoId, moadalWindowTitle, show, closeModal, action}:IModal) => {
    const Note = useAppSelector(state => state.todos.todos).filter(el => el.id === todoId)[0]
    const [title, setTitle] = useState(Note !== undefined ? Note.title:String)
    const [description, setDescription] = useState(Note !== undefined ? Note.description:String)
    const [date, setDate] = useState(Note !== undefined ? Note.date:String)
    const dispatch = useAppDispatch()
    const [stateValues, setStateValues] = useState(false)

    const handleClick = (title: string , description: string, date : string) => {
            setStateValues(true)
            dispatch(action({
                title: title,
                description: description,
                date: date,
                status: Note !== undefined ? Note.status:false,
                id:todoId ?? Date.now()
            }))
    }

    useEffect(() => {
        if (title === "" || description === "" || date === ""){
            setStateValues(false)
        }else{setStateValues(true)}
    }, [title, description, date]);


    if(!show){
        return null
    }

    return (
        <div>
            <Styled.ModalWindow>
                <div style={{width: "100%", marginBottom:"40px"}}>
                    <Styled.Title>{moadalWindowTitle}</Styled.Title>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Styled.InputContainer>
                            <Styled.Input value={title} onChange={e => setTitle(e.target.value)} placeholder={"Input your note title..."}/>
                            <Styled.Input type="date" value={date} onChange={e => setDate( e.target.value)}/>
                        </Styled.InputContainer>
                        <Styled.TextArea value={description} onChange={e => setDescription(e.target.value)} rows={4} cols={50}/>
                    </div>

                </div>
                <Styled.BottomButonsBox>
                    <Styled.CancelButton onClick={closeModal}>CANCEL</Styled.CancelButton>
                    <Styled.ApplyButton onClick={() => {
                        if(stateValues === true){
                            setTitle("")
                            setDescription("")
                            setDate("")
                            handleClick(title, description, date)
                            closeModal()
                        }
                    }} style = {stateValues !== true ? {cursor: "no-drop"}: {cursor: "pointer"}}>APPLY</Styled.ApplyButton>
                </Styled.BottomButonsBox>
            </Styled.ModalWindow>
            <Styled.Overlay onClick={closeModal}/>
        </div>
    )
}