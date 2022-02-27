




export const userReducer = (state=[], action:any) => {
    switch (action.type) {
        case "ADD_USER":
            return [
                ...state, action.payload
            ]

        default: return state;
    }
}