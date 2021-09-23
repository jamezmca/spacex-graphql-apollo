import React, { useRef, useEffect, useCallback } from 'react'
import reactDom from 'react-dom'
import * as modalStyles from './modal.module.css'

export default function Modal({ showModal, setShowModal, loading }) {
    const modalRef = useRef()

    function closeModal(e) {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const Loading = <div><p className="font-effect-fire-animation">Houston, we have a problem...</p></div>

    return reactDom.createPortal(
        <>
            <div className={modalStyles.overlay}
                ref={modalRef}
                onClick={closeModal}
            ></div>
            <div className={modalStyles.modal} >
                {loading ? Loading : <div>

                </div>}
            </div>
        </>, document.getElementById('portal')
    )
}
