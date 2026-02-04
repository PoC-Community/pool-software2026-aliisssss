import React, { useState } from 'react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && editText.trim()) {
            onEdit(todo.id, editText.trim());
        }
        setIsEditing(!isEditing);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
            setEditText(todo.text);
        }
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
            )}
            <div className="todo-actions">
                <button className="edit-btn" onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button className="delete-btn" onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
