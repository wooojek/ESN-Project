const initialState = {
    fetching: true,
    data: {},
    user: {},
}


export const userId = 0;

export const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            state = {...state, data: action.payload.data, user: action.payload.users[userId],  fetching: false };
            break;
        }
        case 'E': {
            throw new Error("aaaaa!", action.payload);
        }
    }

    return state;
}

export default dataReducer;