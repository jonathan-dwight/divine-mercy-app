import { RECEIVE_CURRENT_USER } from '../action/user-action'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return {
            //     ...state,
            //     currentUser: action.payload 
            // }
            return action.payload
        default:
            return state;
    }
}

export default userReducer;