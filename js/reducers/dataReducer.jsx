const initialState = {
    fetching: true,
}

const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            let userId = Math.floor((Math.random()*3));
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