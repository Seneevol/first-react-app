import api from "../../config/axios";
import { GET_INFO, POST_INFO } from "./ActionTypes";

// getAll Info
export const getInfo = () => {
    return (dispatch) => {
        return api
            .get("/get")
            .then((res) => {
                dispatch({ type: GET_INFO, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}

// post Info
export const postInfo = (form) => {
    return (dispatch) => {
        
        return api
            .post("/createInfo", form)
            .then((res) => {
                dispatch({ type: POST_INFO, payload: res.data })
            })
            .catch((err) => console.log(err))
    }
}