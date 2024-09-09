import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.background};
        transition: all 0.50s linear;
    }
`

export const OpenModalWindowButton = styled.div`
    padding: 10px;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: #6C63FF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border: 3px solid #6C63FF;
    transition: all 0.5s;
    
    &:hover{
        border-color: #857efd;
        background: #534CC2;
    }

    @media (max-width: 510px) {
        width: 30px;
        height: 30px;
        font-size: 20px;
    }

    @media (max-width: 510px) {
        width: 25px;
        height: 25px;
        font-size: 18px;
    }
`

export const ModalButtonBox = styled.div`
    display: flex;
    justify-content: end;
`

export const TitleTodo = styled.div`
    display: flex;
    justify-content: center;
    font-family: Kanit;
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.commonColor};
    transition: all 0.5s;
    margin-bottom: 20px;

    @media (max-width: 1000px) {
        font-size: 35px;
    }

    @media (max-width: 750px) {
        margin-bottom: 15px;
    }

    @media (max-width: 510px) {
        font-size: 30px;
    }

    @media (max-width: 510px) {
        font-size: 27px;
    }
`

export const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    font-family: Kanit;
`

export const SearchContainer = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 750px) {
        flex-direction: column-reverse;
    }
`

export const FilterTheme = styled.div`
    display: flex;

    @media (max-width: 750px) {
        margin-bottom: 10px;
    }
`

export const SearchInput = styled.label`
    position: relative;
    display: flex;
    width: 595px;
    height: 38px;

    input {
        width: 100%;
        height: 100%;
        padding: 0 60px 0 15px;
        border: 1px solid ${props => props.theme.search};
        border-radius: 5px;
        outline: none;
        font-family: Kanit;
        background: none;
        color: ${(props) => props.theme.commonColor};

    }

    input::placeholder {
        color: ${props => props.theme.searchPlaceholder};
    }

    .icon-search {
        position: absolute;
        font-size: 30px;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        color: ${(props) => props.theme.search};
    }

    @media (max-width: 1000px) {
        width: 495px;
    }

    @media (max-width: 750px) {
        width: 595px;
    }

    @media (max-width: 650px) {
        width: 530px;
    }

    @media (max-width: 580px) {
        width: 460px;
    }

    @media (max-width: 510px) {
        width: 400px;
        
        .icon-search {
            font-size: 27px;
        }
    }

    @media (max-width: 450px) {
        width: 330px;
    }
    @media (max-width: 385px) {
        width: 280px;
    }
`

export const Select = styled.select`
    padding: 8px;
    display: flex;
    width: 100%;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: Kanit;
    outline: none;
    cursor: pointer;
    border: 3px solid #6C63FF;
    background-color: #6C63FF;
    border-radius: 5px;
    color: #fff;
    transition: all 0.5s;

    &:hover {
        border-color: #857efd;
    }
    
    option{
        background: #fff;
        color: #6C63FF;
        font-family: Kanit;
    }
`

export const SelectLabel = styled.label`
    position: relative;
    width: 115px;
    height: 40px;
    margin-left: 15px;
    
    div{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(-50%, -50%);
        font-size: 20px;
        cursor: pointer;
        color: #fff;
    }
    
    @media (max-width: 1000px) {
        margin-left: 10px;
    }

    @media (max-width: 750px) {
        margin: 0;
        width: 70%;
    }
`

export const DarkLightBox = styled.div`
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #6C63FF;
    background-color: #6C63FF;
    border-radius: 5px;
    color: #fff;
    font-size: 25px;
    margin-left: 15px;
    transition: all 0.5s;

    &:hover{
        background-color: #5850DD;
    }

    @media (max-width: 1000px) {
        margin-left: 10px;
    }

    @media (max-width: 750px) {
        width: 30%;
    }
`

