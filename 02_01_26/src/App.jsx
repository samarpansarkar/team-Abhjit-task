import TaskListContainer from './features/tasks/containers/TaskList.container';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Task Management Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Your mini Jira for interview success
          </p>
        </header>

        <TaskListContainer />
      </div>
    </div>
  );
}

export default App;