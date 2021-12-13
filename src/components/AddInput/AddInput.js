import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
import { useTranslation } from 'react-i18next'

function AddInput({
    setTodos, todos
}) {
    const { t, i18n } = useTranslation()
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
                placeholder={t('addPlaceholder')}
            />
            <button 
                className="add-btn"
                onClick={addTodo}
            >
                {t('addBtn')}
            </button>
        </div>
    )
}

export default AddInput
