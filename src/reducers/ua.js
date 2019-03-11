const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = initialState, action) => {
    console.log('ua: ', action);
    if (action.type === 'LOAD_DATA_UA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    if (action.type === 'LOAD_DATA_UA_SUCCESS') {
        return {
            isFetching: false,
            data: action.data,
            error: false
        }
    }

    if (action.type === 'LOAD_DATA_UA_FAILURE') {
        return {
            isFetching: false,
            data: [],
            error: true
        }
    }

    return state;
}

export default ua;
