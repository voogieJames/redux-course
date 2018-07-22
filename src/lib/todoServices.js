export const getTodos = () => {
    return fetch('http://localhost:8092/todos')
        .then(res => res.json())
};