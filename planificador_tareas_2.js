function createTaskPlanner() {
    const tasks = []

    function addTask(task) {
        task.completed = false;
        tasks.push(task);
    }
    function removeTask(value) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === value || tasks[i].name === value) {
                tasks.splice(i, 1);
            }
        }
    }
    function getTasks() {
        return tasks.slice();
    }
    function getPendingTasks() {
        return tasks.filter((task) => !task.completed);
    }
    function getCompletedTasks() {
        return tasks.filter((task) => task.completed);
    }
    function markTaskAsCompleted(value) {
        const task = tasks.find((task) => task.id === value || task.name === value);
        if (task) {
            task.completed = true;
        }
    }
    function getSortedTasksByPriority() {
        let orderedTasksList = [...tasks]
        return orderedTasksList.sort((a, b) => a.priority - b.priority);
    }

    function filterTasksByTag(tag) {
        return tasks.filter((task) => task.tags.includes(tag));
    }

    function updateTask(taskId, updates) {
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            Object.assign(task, updates);
        }
    }

    return {
        addTask,
        removeTask,
        getTasks,
        getPendingTasks,
        getCompletedTasks,
        markTaskAsCompleted,
        getSortedTasksByPriority,
        filterTasksByTag,
        updateTask
    };
}
