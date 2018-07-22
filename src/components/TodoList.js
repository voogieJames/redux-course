import React, { Component } from 'react';
import { fetchTodos } from '../reducers/todo';
import { connect } from 'react-redux';

const TodoItem = ( {name, isComplete} ) => (
    <li>
        <input 
        defaultChecked={ isComplete }
        type="checkbox"/> { name }
    </li>
);
class TodoList extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="Todo-List">
                <ul>
                    { this.props.todos.map(todo => <TodoItem key={ todo.id } { ...todo }/>) }
                </ul>
            </div>
        )
    } 
}


export default connect(
    (state) => ({ todos: state.todos }),
    {fetchTodos}
)(TodoList)