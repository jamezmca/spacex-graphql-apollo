import React from 'react'
import reactDom from 'react-dom'
import * as modalStyles from './modal.module.css'

export default function Modal({showModal, setShowModal}) {
    
    return reactDom.createPortal(
        <>
            {showModal && (
                <div>

                </div>
            )}
        </>, document.getElementById('portal')
    )
}
