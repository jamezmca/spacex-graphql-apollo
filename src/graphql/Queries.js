import { gql } from '@apollo/client'

export const GET_PAST_LAUNCHES = gql`
    query GET_PAST_LAUNCHES($limit: Int!) {
        launchesPast(limit: $limit) {
            id
            mission_name
            links {
                flickr_images
                mission_patch_small
            }
            rocket {
                rocket_name
            }
            launch_date_utc
        }
    }
`

export const GET_LAUNCH_DETAILS = gql`
    query GET_LAUNCH_DETAILS($id: ID!) {
        launch(id: $id) {
            id
            mission_name
            details
            links {
                flickr_images
                mission_patch
            }
        }
    }
`