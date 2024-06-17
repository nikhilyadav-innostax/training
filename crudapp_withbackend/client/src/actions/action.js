export const addTodo = (data) => {
    // console.log(data)
    return{
        type:"ADD_TASK",
        payload: data,
    }
}
export const deleteTodo = (id) => {
    return{
        type:"DeleteTask",
        payload: id,
    }
}
export const updateTodo = (data) => {
    return{
        type:"UpdateTask",
        payload: data,
    }
}