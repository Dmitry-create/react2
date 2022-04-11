
const initialState = {
    check: false,
    note: 'вы включили checkbox'
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "CHANGE_CHECKBOX":
            return {...state, check: !state.check
        }
    default: return state
    }
}

export default profileReducer;