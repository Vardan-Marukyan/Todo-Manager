import styled from "styled-components";

export const Notes = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    li:not(:last-child){
            border-bottom: 1px solid ${(props) => props.theme.noteItemBorder};
    }
`

export const Note = styled.li`
    display: flex;
    width: 520px;
    justify-content: space-between;
    padding: 15px 0;

    div {
        display: flex;
    }

    .todoCheckbox {
        margin-left: 20px;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`
export const TodoTool = styled.div`
    display: flex;
    font-size: 20px;
    color: #c0c0c0;
    cursor: pointer;
`

export const TodoToolBox = styled.div`
    .icon-pen:hover {
        color: #6C63FF;
        transition: all 0.3s;
    }

    .icon-trash:hover{
        color: ${(props) => props.theme.trashColor};;
        transition: all 0.3s;
    }
`

export const NoteTitle = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin-left: 15px;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.theme.commonColor};
    transition: all 0.3s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 250px;

    @media (max-width: 510px) {
        font-size: 15px;
        max-width: 200px;
    }

    @media (max-width: 510px) {
        font-size: 15px;
        max-width: 150px;
    }
`

export const TodoToolsBoxLeft = styled.div`
    align-items: center;
`

export const DetectiveImageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export const DetectiveImageBoxTextEmpty = styled.div`
    font-family: Kanit;
    font-weight: normal;
    font-size: 25px;
    margin-top: 10px;
    color: ${(props) => props.theme.commonColor};
`