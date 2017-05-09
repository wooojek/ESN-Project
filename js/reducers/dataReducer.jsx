const initialState = {
    fetching: false,
    fetched: false,
    data: [],
}

const dataReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            state = {...state, data: action.payload };
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