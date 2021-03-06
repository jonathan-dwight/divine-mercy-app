import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user-reducer'

const persistConfig = {
    key: 'root',
    storage 
    // whitelist: ['cart']
};

const rootReducer = combineReducers({
    currentUser: userReducer,
});


export default persistReducer(persistConfig, rootReducer)