const initialState = {
    tasks: [
        {
            "name":"Dhananjay Singh",
            "id":"140",
            "email":"Dhananjay.Singh@innostax.com",
            "update":"Testing"
        },
        {
            "name":"Ayush Aggarwal",
            "id":"141",
            "email":"ayush.aggarwal@innostax.com",
            "update":"InProgress"
        },
        {
            "name":"Shubham Sharma",
            "id":"90",
            "email":"shubham.sharma@innostax.com",
            "update":"ToDo"
        },
        {
            "name":"Nikhil Yadav",
            "id":"220",
            "email":"nikhil.yadav@innostax.com",
            "update":"Done"
        }
    ]
}

const rootReducer = (state = initialState, actions) => {
    // console.log(actions)
    switch(actions.type){
        case "ADD_TASK":
            console.log("data provided");
            return{
                ...state,
                tasks: [...state.tasks, actions.payload]
            }
        case "DeleteTask":
            return{
                ...state,
                tasks: state.tasks.filter((item) => item.id !== actions.payload)
            }
        case "UpdateTask":
            // console.log(actions, "inside task reducer")
            return{
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id === actions.payload.id) {
                        return {
                            ...item,
                            name: actions.payload.name,
                            email: actions.payload.email,
                            update: actions.payload.update
                        };
                    }
                    return item;
                })
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer