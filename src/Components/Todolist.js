/*import React, { useState } from 'react';

function Todolist() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    function handleInputChange(e) {
        setInputValue(e.target.value); // Corrected this line
    }

    const handleAddTodos = () => {
        if (inputValue !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]); // Update the todos state
            setInputValue(""); // Clear the input field after adding
        }
    };

    return (
        <div>
            <div className="todo-container">
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Enter a list"
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTodos}>Add</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;*/
