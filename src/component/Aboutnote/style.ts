import styled from "styled-components";

export const Overlay = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: ${(props) => props.theme.modalBackround};
     filter: blur(20px);
`

export const AboutNoteModalWindow = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    border: 1px solid #fff;
    border-radius: 20px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.background};
    z-index: 1000;
    color: ${(props) => props.theme.commonColor};
    overflow-wrap: break-word;
    white-space: normal;

    @media (max-width: 650px) {
        width: 70%;
    }
`

export const NoteTitle = styled.div`
    text-transform: uppercase;
    font-size: 25px;
    margin-right: 10px;
    overflow: hidden;
`

export const NoteDescription = styled.div`
    width: 100%;
    margin: 20px 0;
`

export const NoteDate = styled.div`
    font-size: 12px;
    color: gray;
`

export const NoteStatus = styled.div`
    font-size: 12px;
    color: gray;
`

export const CloseButton = styled.div`
    padding: 6px;
    border: 3px solid #6C63FF;
    border-radius: 5px;
    background: #6C63FF;
    transition: all 0.5s;
    cursor: pointer;
    
    &:hover{
        border-color: #857efd;
    }
    
    &::before{
        color: #fff;
        font-size: 20px;
    }
`