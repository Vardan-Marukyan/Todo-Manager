import React, {useEffect, useState} from 'react';
import "./assets/icon/style.css"
import './App.css';
import {ModalWindow} from "./component/Modalwindow/Modalwindow";
import * as Styled from "./component/DefaultStyle/style"
import {TodoListItems} from "./component/TodolistItems/Todolistitems";
import {addTodos, Itodos} from "./store/todoSlice";
import {useAppSelector} from "./store";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {useTheme} from "./component/themes/Themeprovider";
import {lightTheme, darkTheme} from "./component/themes/ThemesColor";
import {GlobalStyle} from "./component/DefaultStyle/style";

function App() {
    const todoState = useAppSelector(state => state.todos.todos)
    const [show, setShow] = useState(Boolean)
    const [searchTerm, setSearchTerm] = useState("")
    const [todosList, setTodosList] = useState(todoState)
    const { theme, toggleTheme } = useTheme();


    const [select, setSelect] = useState("")
    const handleModal = () => setShow(!show)


    const searchTodos = (searchTxet:string, data:Itodos[], defaultData: Itodos[]) => {
        if(!searchTxet){
            return defaultData
        }
        return defaultData.filter(({title}) => title.toLowerCase().includes(searchTxet.toLowerCase()))
    }

    const handleFilterChange = (value: string) => {
        setSelect(value);
        setTodosList(
            value === "All" ? todoState : todoState.filter((el) => el.status === (value === "Complete"))
        );
    };

    useEffect(() => {
        handleFilterChange("All");
        const filteredTodos = searchTodos(searchTerm, todosList, todoState);
        const filteredTodosList = filterTodosByIds(todoState, filteredTodos);
        setTodosList(filteredTodosList);
    }, [searchTerm, todoState]);

    const filterTodosByIds = (data: Itodos[], filteredData: Itodos[]): Itodos[] => {
        const filteredTodosList: Itodos[] = [];
        for (let j = 0; j < filteredData.length; j++) {
            for (let i = 0; i < data.length; i++) {
                if (filteredData[j] && data[i].id === filteredData[j].id) {
                    filteredTodosList.push(data[i]);
                }
            }
        }
        return filteredTodosList;
    };


    return (
        <StyledThemeProvider theme={theme === true ? lightTheme : darkTheme}>
            <GlobalStyle/>
            <Styled.Wrapper>
                <div>
                    <Styled.TitleTodo>TODO LIST</Styled.TitleTodo>
                    <Styled.SearchContainer>
                        <Styled.SearchInput>
                            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder={"Search Note..."}/>
                            <div className={"icon-search"}></div>
                        </Styled.SearchInput>
                        <Styled.FilterTheme>
                            <Styled.SelectLabel htmlFor={"SearchSelect"}>
                                <Styled.Select id={"SearchSelect"} value={select} onChange={(e) => handleFilterChange(e.target.value)}>
                                    <option value={"All"}>ALL</option>
                                    <option value={"Complete"}>Complete</option>
                                    <option value={"Incomplete"}>Incomplete</option>
                                </Styled.Select>
                                <div className={"icon-down_arrow"} id={"SearchSelect"}></div>
                            </Styled.SelectLabel>
                            <Styled.DarkLightBox className={theme === true ? "icon-moon" : "icon-sun"} onClick={toggleTheme}></Styled.DarkLightBox>
                        </Styled.FilterTheme>
                    </Styled.SearchContainer>

                    <TodoListItems items={todosList}/>
                </div>


                <Styled.ModalButtonBox>
                    <Styled.OpenModalWindowButton className={"icon-cross"} onClick={handleModal}/>
                </Styled.ModalButtonBox>
            </Styled.Wrapper>
            <ModalWindow moadalWindowTitle={"NEW NOTE"} show={show} closeModal={handleModal} action={addTodos}/>
        </StyledThemeProvider>
    );
}

export default App;
