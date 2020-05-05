
const initialState = {
    quiz: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'QUIZ_LOADED':
            return {
                quiz: action.payload
            };
        
        default:
            return state    
    }
}

export default reducer;