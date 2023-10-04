import axios from "axios";

export const getCars=()=>{
    return async(dispatch)=>{
        const result = await axios.get("https://intern-mnab.onrender.com/getImage");
        let arr = result.data.data;
        dispatch({
            type:'GET_CARS',
            payload:arr
        })
    }
} 