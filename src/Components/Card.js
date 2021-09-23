import React from 'react'
import * as cardStyles from './card.module.css'

export default function Card({ launch, handleClick, setLaunchID, launchID }) {
    // console.log(launch)
    const date = launch.launch_date_utc.slice(0, 10)
    
    if (launch.links.mission_patch_small == null) return null

    return (
        <div className={cardStyles.container}
            onMouseOver={() => setLaunchID(launch.id)}
            onClick={handleClick}>
            <h4>{launch.mission_name}</h4>
            <p>{date}</p>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name} />
        </div>
    )
}
