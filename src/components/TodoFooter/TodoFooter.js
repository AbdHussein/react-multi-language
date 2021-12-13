import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import "./TodoFooter.css"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    const { t } = useTranslation()
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? t("task") : t("tasks")} {t("left")}</p>
            <Link to="/followers">{t('followers')}</Link>
        </div>
    )
}

export default TodoFooter
