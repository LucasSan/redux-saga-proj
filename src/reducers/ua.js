const initialState = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = initialState, action) => {
    if (action.type === 'LOAD_DATA_UA') {
        return {
            isFetching: true,
            data: [],
            error: false
        }
    }

    return state;
}

export default ua;
