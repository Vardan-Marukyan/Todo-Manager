import {IAboutNoteWindow} from "../config/types";
import {useAppSelector} from "../../store";
import * as Styled from "./style"

export const AboutNote = ({todoId, show, closeModal}: IAboutNoteWindow)=>{

    const Note = useAppSelector(state => state.todos.todos).filter(el => el.id === todoId)[0]

    return(
        <div>
            <Styled.AboutNoteModalWindow>
                <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"start"}}>
                    <Styled.NoteTitle>{Note.title}</Styled.NoteTitle>
                    <Styled.CloseButton className="icon-close" onClick={closeModal}/>
                </div>
                <Styled.NoteDescription>{Note.description}</Styled.NoteDescription>
                <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <Styled.NoteDate>{Note.date}</Styled.NoteDate>
                    <Styled.NoteStatus style={Note.status === false ? {color: "#ff3131"} : {color:"#19af19"}}>{Note.status === false ? "Incomplete" : "Complete"}</Styled.NoteStatus>
                </div>
            </Styled.AboutNoteModalWindow>
            <Styled.Overlay onClick={closeModal}></Styled.Overlay>
        </div>
    )
}