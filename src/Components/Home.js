import React, { useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_LAUNCH_DETAILS, GET_PAST_LAUNCHES } from '../graphql/Queries'
import Card from './Card'

export default function Home() {
    const [launchID, setLaunchID] = useState('')
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
            <h1 className="font-effect-anaglyph">SpaceX Launches</h1>
            <div className="body">
                {loading && <h3 className="font-effect-neon">loading...</h3>}
                {!loading && data.launchesPast.map((launch, i) => {
                    return <Card key={i} launch={launch}/>
                })}
            </div>
            

        </div>
    )
}
