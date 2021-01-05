export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const receiveUser = (payload) => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }
}