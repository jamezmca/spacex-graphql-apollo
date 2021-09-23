import React, { useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_LAUNCH_DETAILS, GET_PAST_LAUNCHES } from '../graphql/Queries'
import Card from './Card'
import Loading from './Loading'
import Modal from './Modal'

export default function Home() {
    const [launchID, setLaunchID] = useState('')
    const [showModal, setShowModal] = useState(false)
    const { loading, error, data } = useQuery(GET_PAST_LAUNCHES, {
        variables: {
            limit: 400
        }
    })
    console.log(loading, data)

    const [getLaunchDetails, { loading2, error2 }] = useLazyQuery(GET_LAUNCH_DETAILS, {
        variables: { id: launchID }
    })


    return (
        <div className="home">
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

            <h1 className="font-effect-anaglyph">SpaceX Launches</h1>
            <div className="body">
                {loading && <Loading />}
                {!loading && data.launchesPast.map((launch, i) => {
                    return <Card key={i} 
                                launch={launch} 
                                setShowModal={setShowModal}
                                setLaunchID={setLaunchID} />
                })}
            </div>
        </div>
    )
}
