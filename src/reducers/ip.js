const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = initialState, action) => {
    if (action.type === 'LOAD_DATA_REQUEST') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    return state;
}

export default ip;
