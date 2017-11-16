export default function reducer(state={
    userName: ''
}, action){
    switch(action.type){
        case "updateName":
            return {...state, userName: action.payload}
    }
    return state
}