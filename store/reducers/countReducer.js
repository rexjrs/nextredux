export default function reducer(state = {
    count: 0
}, action) {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + action.payload }
        case "minus":
            return { ...state, count: state.count - action.payload }
    }
    return state
}