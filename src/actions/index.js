import { ADD_DESTINATION, REMOVE_DESTINATION } from './types'

export const addDestination = () => {
    return {
        type: ADD_DESTINATION,
        payload: ''
    }
}
export const removeDestination = () => {
    return {
        type: REMOVE_DESTINATION,
        payload: ''
    }
}