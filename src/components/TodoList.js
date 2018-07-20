import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ( {name, isComplete} ) => (
    <li>
        <input 
        defaultChecked={ isComplete }
        type="checkbox"/> { name }
    </li>
);

const TodoList = (props) =>  console.log(' :: rendering todos list') || (
    <div className="Todo-List">
        <ul>
            { props.todos.map(todo => <TodoItem key={ todo.id } { ...todo }/>) }
        </ul>
    </div>
);

export default connect(
    (state) => ({ todos: state.todos })
)(TodoList)