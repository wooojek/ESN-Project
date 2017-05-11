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
        case 'FETCH_DATA_NEWS': {
            state = {...state, 
                        data: { news: action.payload },
                    };
            break;
        }
        case 'FETCH_DATA_GROUPS': {
            state = {...state, 
                        data: { groups: action.payload },
                    };
            break;
        }
        case 'FETCH_DATA_KNOWLEDGE': {
            state = {...state, 
                        data: { knowledge: action.payload },
                    };
            break;
        }
        case 'FETCH_DATA_SITES': {
            state = {...state, 
                        data: { sites: action.payload },
                    };
            break;
        }
        case 'E': {
            throw new Error("aaaaa!", action.payload);
        }
    }

    return state;
}

export default dataReducer;