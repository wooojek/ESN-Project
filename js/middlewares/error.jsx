const error = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log("Error: ", e);
    }
};

export default error;