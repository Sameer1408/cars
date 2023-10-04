import axios from "axios";

export const getCars=()=>{
    return async(dispatch)=>{
        const result = await axios.get("http://localhost:4000/getImage");
        let arr = result.data.data;
        dispatch({
            type:'GET_CARS',
            payload:arr
        })
    }
} 