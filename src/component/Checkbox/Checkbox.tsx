import * as Styled from "./style"
import {useAppSelector, useAppDispatch} from "../../store";
import {changeStatus} from "../../store/todoSlice";
import {useEffect} from "react";

interface Iindex {
    sendId: number
    status: boolean
}

export const CheckBox = ({sendId,status}:Iindex) => {
    const todoState = useAppSelector(state => state.todos.todos)
    const todo = todoState.find(({id}) => id === sendId)
    const dispatch = useAppDispatch()

    if(todo){
        const changeNoteStatus = () => dispatch(
            changeStatus({
                id: todo.id,
                newStatus: !todo.status
            })
        )

        return (
            <Styled.CheckBox status={status}>
                <input type="checkbox" onChange={changeNoteStatus}/>
                <span className="icon-checkmark"></span>
            </Styled.CheckBox>
        )
    }

    return <div>Error</div>
}