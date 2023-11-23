export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

export const intialSate = 0

export const reducer = (state, action) => {
    switch(action){
        case INCREMENT:
        return state + 1
        case DECREMENT:
        return state - 1 
        case RESET:
        return intialSate
        default:
            return state

    }
}


