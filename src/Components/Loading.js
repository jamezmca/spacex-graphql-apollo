import React from 'react'
import * as loadingStyles from './loading.module.css'

export default function Loading() {
    return (
        <div className={loadingStyles.container}>
            <h3 className="font-effect-fire-animation">LOADING</h3>

            <div className={loadingStyles.loader}>
                <div className={loadingStyles.rocket}>
                    <i className="fas fa-space-shuttle"></i>
                </div>
                <span><i className={loadingStyles.sep}></i></span>
            </div>
        </div>
    )
}
