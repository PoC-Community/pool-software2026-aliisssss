import React from 'react';

interface TodoStatsProps {
    count: number;
    onClearCompleted: () => void;
}

const TodoStats: React.FC<TodoStatsProps> = ({ count, onClearCompleted }) => {
    return (
        <div className="todo-stats">
            <span>{count} tasks remaining</span>
            <button className="clear-btn" onClick={onClearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoStats;
