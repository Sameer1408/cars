var initailState = {
    allCars :[]
}

export const carReducer=(state = initailState,action)=>{

    if(action.type=='GET_CARS')
    {   
        return {...state,allCars:action.payload}
    }
    else{
        return state
    }
}