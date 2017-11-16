export function add(value){
    return {
        type: "add",
        payload: value
    }
}
export function minus(value){
    return {
        type: "minus",
        payload: value
    }
}