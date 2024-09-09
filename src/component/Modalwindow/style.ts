import styled from "styled-components";

export const Overlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: ${(props) => props.theme.modalBackround};
`

export const ModalWindow = styled.div`
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

   @media (max-width: 1000px) {  
    width: 440px;
   }

  @media (max-width: 670px) {
   width: 70%;
  }

 @media (max-width: 550px) {
  padding: 10px 25px;
 }
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-family: Kanit;
    font-size: 28px;
    margin-bottom: 10px;
    color: ${(props) => props.theme.commonColor};

    @media (max-width: 550px) {
     font-size: 25px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;

   @media (max-width: 670px) {
    flex-direction: column;
   }
`

export const Input = styled.input`
    padding: 10px 25px;
    border: 1px solid ${(props) => props.theme.search};
    border-radius: 5px;
    font-family: Kanit;
    font-size: 15px;
    margin-bottom: 20px;
    background: none;
    outline: none;
    color: ${(props) => props.theme.commonColor};

    placeholder {
     color: ${props => props.theme.searchPlaceholder};
    }
`

export const TextArea = styled.textarea`
 padding: 10px 25px;
 border: 1px solid ${(props) => props.theme.search};
 border-radius: 5px;
 font-family: Kanit;
 font-size: 15px;
 margin-bottom: 20px;
 background: none;
 outline: none;
 color: ${(props) => props.theme.commonColor};
 resize: none;
`

 export const CancelButton = styled.button`
    width: 110px;
    height: 48px;
    font-family: Kanit;
    font-size: 20px;
    background: none;
    border: 1px solid #6C63FF;
    color: #6C63FF;
    border-radius: 5px;
    cursor: pointer;
  
    &:hover{
     transition: all 0.5s;
     background: #6C63FF;
     color: #fff;
    }

   @media (max-width: 550px) {
    font-size: 17px;
    width: 95px;
   }
`

export const ApplyButton = styled.button`
 width: 110px;
 height: 48px;
 font-family: Kanit;
 font-size: 18px;
 background: #6C63FF;
 border: 1px solid #6C63FF;
 color: #fff;
 border-radius: 5px;
 cursor: pointer;

 &:hover{
  transition: all 0.5s;
  background: none;
  color: #6C63FF;
 }

 @media (max-width: 550px) {
  font-size: 17px;
  width: 95px;
 }
`

export const BottomButonsBox = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
