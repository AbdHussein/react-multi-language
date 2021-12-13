import React from 'react'
import { useTranslation } from 'react-i18next'
import FollowersList from '../FollowersList/FollowersList'
import Header from '../Header/Header'
import "./Followers.css"

export default function Followers() {
    const { t } = useTranslation()
    return (
        <div className="followers">
            <Header title={t("followers")} />
            <FollowersList />
        </div>
    )
}
