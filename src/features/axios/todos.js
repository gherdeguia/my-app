import api from "./api";

export const getTodoData = () => {
    return api.get("/todos");
}

export const addTodoData = (text) => {
    return api.post("/todos", {text})
}


export const updateTodoData = (id, todoStatus) => {
    return api.put(`/todos/${id}`, todoStatus)
}

// export default api;