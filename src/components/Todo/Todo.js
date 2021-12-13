import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import "./Todo.css"

function Todo() {
    const { t, i18n } = useTranslation()
    const [todos, setTodos] = useState([])
    
    return (
        <div className="todo">
            <div className='d-flex justify-content-between align-items-center'>
            <Header title={t('header')} />
            <button onClick={() => {
                const lang = i18n.language === 'en' ? 'ar' : 'en'
                localStorage.setItem('lang', lang)
                i18n.changeLanguage(lang)
            }} className='add-btn border-dark'>{i18n.language === 'en' ? 'AR' : 'EN'}</button>
            </div>
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList 
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}

export default Todo
