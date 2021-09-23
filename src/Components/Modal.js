import React, { useRef, useEffect, useCallback } from 'react'
import reactDom from 'react-dom'
import * as modalStyles from './modal.module.css'

export default function Modal({ showModal, setShowModal }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (modalRef.current = e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return reactDom.createPortal(
        <>
            <div className={modalStyles.overlay}
                ref={modalRef}
                onClick={closeModal}
            ></div>
            <div className={modalStyles.modal} >

            </div>

        </>, document.getElementById('portal')
    )
}
