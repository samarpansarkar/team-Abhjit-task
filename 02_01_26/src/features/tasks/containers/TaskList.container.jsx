import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TaskList from '../component/TaskList.view';
import { fetchTasks } from '../taskSlice';

const TaskListContainer = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.tasks);

    console.log(items);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return <TaskList tasks={items} loading={loading} error={error} />;
};

export default TaskListContainer;