import React from 'react';

const TodoItem = ( {name, isComplete} ) => (
    <li>
        <input 
        defaultChecked={ isComplete }
        type="checkbox"/> { name }
    </li>
);

export default (props) => (
    <div className="Todo-List">
        <ul>
            { props.todos.map(todo => <TodoItem key={ todo.id } { ...todo }/>) }
        </ul>
    </div>
);