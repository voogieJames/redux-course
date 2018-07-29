export const getTodos = () => {
    return fetch('http://localhost:8092/todos')
        .then(res => res.json())
};

export const createTodo = (name) => {
    return fetch('http://localhost:8092/todos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name:name, icComplete: false})
    })
        .then(res => res.json())
};