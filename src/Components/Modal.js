import React, { useRef, useEffect, useCallback } from 'react'
import reactDom from 'react-dom'
import * as modalStyles from './modal.module.css'

export default function Modal({ showModal, setShowModal, loading, data }) {
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
    console.log('loading2', loading, data)

    const Loading = <div><p className="font-effect-fire-animation">Houston, we have a problem...</p></div>
    console.log('daaattaaa', data)
    return reactDom.createPortal(
        <>
            <div className={modalStyles.overlay}
                ref={modalRef}
                onClick={closeModal}
            ></div>
            {!data ? Loading :
                <div className={modalStyles.modal} >
                    <h1 className={modalStyles.name}>{data.launch.mission_name}</h1>
                    <h5 className={modalStyles.description}>{data.launch.details}</h5>
                    <img src={data.launch.links.flickr_images[0]}
                        alt={data.launch.mission_name}
                        className={modalStyles.mainImage} />
                    <div className={modalStyles.images} >
                        {data.launch.links.flickr_images.map(image => <img src={image} alt={image} key={image} />)}
                    </div>
                </div>
            }
        </>, document.getElementById('portal')
    )
}
