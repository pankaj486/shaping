import { Dispatch } from "redux";



export const userAction = (user:any) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "ADD_USER",
            payload: user
        })
        // dispatch({
        //     type: "LOGIN_USER",
        //     payload: 
        // })
    }
}