import styled from "styled-components";
import "../../assets/icon/style.css"

interface Istatus {
    status: boolean
}

export const CheckBox = styled.label<Istatus>`
    position: relative;
    width: 26px;
    height: 26px;

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .icon-checkmark {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1.5px solid #6C63FF;
        border-radius: 3px;
        cursor: pointer;
        font-size: 22px;
        background-color: ${props => (props.status === true ? "#6C63FF":"none")};
        color: #fff;
    }
    

    .icon-checkmark:before {
        opacity:  ${props => (props.status === true ? 1:0)};
    }

    input:checked ~ .icon-checkmark:before{
        opacity: 1;
        transition: all 0.5s ease-in;
    }
`