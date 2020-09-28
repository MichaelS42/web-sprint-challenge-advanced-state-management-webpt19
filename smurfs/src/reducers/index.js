import { FETCH_START }from '../actions';
import { FETCH_SUCCESS } from '../actions';
import { FETCH_FAIL } from '../actions';
import { POST_START }from '../actions';
import { POST_SUCCESS } from '../actions';
import { POST_FAIL } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

const reducer = (state=initialState, actions) => {
    switch(actions.type){
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }
            case FETCH_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    smurfs: actions.payload
                }
                case FETCH_FAIL:
                    return {
                        ...state,
                        isFetching: false,
                        error: actions.payload
                    }
                    case POST_START:
                        return {
                            ...state,
                            isPosting: true,
                            smurfs: [...state.smurfs]
                        }
                        case POST_SUCCESS:
                            return {
                                ...state,
                                isPosting: false,
                                smurfs: actions.payload
                            }
                            case POST_FAIL:
                                return {
                                    ...state,
                                    isPosting: false,
                                    error: actions.payload
                                }
                    default: 
                    return state
    }
}

export default reducer; 