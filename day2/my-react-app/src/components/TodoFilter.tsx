import React from 'react';

type Filter = 'all' | 'active' | 'completed';

interface TodoFilterProps {
    currentFilter: Filter;
    onFilterChange: (filter: Filter) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
    return (
        <div className="todo-filters">
            {(['all', 'active', 'completed'] as Filter[]).map((filter) => (
                <button
                    key={filter}
                    className={currentFilter === filter ? 'active' : ''}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default TodoFilter;
