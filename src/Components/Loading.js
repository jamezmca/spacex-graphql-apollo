import React from 'react'
import * as loadingStyles from './loading.module.css'

export default function Loading() {
    return (
        <div className={loadingStyles.loader}>
            <div className={loadingStyles.rocket}>
                <i className="fas fa-space-shuttle"></i>
            </div>
            <span><i></i></span>
        </div>
    )
}
