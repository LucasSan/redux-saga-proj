const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = initialState, action) => {
    console.log(action);
    if (action.type === 'LOAD_DATA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    if (action.type === 'LOAD_DATA_SUCCESS') {
        return {
            isFetching: false,
            data: action.data,
            error: false
        }
    }

    if (action.type === 'LOAD_DATA_FAILURE') {
        return {
            isFetching: false,
            data: [],
            error: true
        }
    }

    return state;
}

export default ip;
