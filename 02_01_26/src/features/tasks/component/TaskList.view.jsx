const TaskList = ({ tasks, loading, error }) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">Loading tasks...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600">Error: {error}</p>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No tasks yet. Add your first task!</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                readOnly
                                className="w-5 h-5 rounded border-gray-300"
                            />
                            <span
                                className={`text-lg ${task.completed
                                    ? 'line-through text-gray-400'
                                    : 'text-gray-800'
                                    }`}
                            >
                                {task.title}
                            </span>
                        </div>
                        <button className="text-red-500 hover:text-red-700 font-medium">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;