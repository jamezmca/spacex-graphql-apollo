import React, { useState } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_PAST_LAUNCHES, GET_LAUNCH_DETAILS } from '../graphql/Queries'
import Card from './Card'
import Loading from './Loading'
import Modal from './Modal'

export default function Home() {
    const [launchID, setLaunchID] = useState('')
    console.log(launchID)
    const [showModal, setShowModal] = useState(false)
    const { loading, error, data } = useQuery(GET_PAST_LAUNCHES, {
        variables: {
            limit: 400
        }
    })
    console.log(loading, data)

    const [getLaunchDetails, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(GET_LAUNCH_DETAILS, {
        variables: { id: launchID }
    })

    function handleClick() {
        getLaunchDetails()
        setShowModal(true)
    }

    return (
        <div className="home">
            {showModal && <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                loading={loading2}
                data={data2} />}

            <h1 className="font-effect-anaglyph">SpaceX Launches</h1>
            <div className="body">
                {loading && <Loading />}
                {!loading && data.launchesPast.map((launch, i) => {
                    return <Card key={i}
                        launch={launch}
                        setShowModal={setShowModal}
                        setLaunchID={setLaunchID}
                        launchID={launchID}
                        handleClick={handleClick} />
                })}
            </div>
        </div>
    )
}
