import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_LAUNCH_DETAILS, GET_PAST_LAUNCHES } from '../graphql/Queries'

export default function Home() {
    const { loading, error, data } = useQuery(GET_PAST_LAUNCHES, {
        variables: {
            limit: 15
        }
    })
    console.log(data)

    return (
        <div className="home">
            <h1>search for weather</h1>
            <input type="text" placeholder="cityName"></input>

        </div>
    )
}
