const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'View new JavaScript lesson'
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Take test after the lesson'
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Do homework after lesson'
    }
]

const taskBlock = document.querySelector('.create-task-block')
const taskList = document.querySelector('.tasks-list')

const addTask = () => tasks.forEach(task => {
    const checked = task.completed ? 'checked' : null
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.dataset.taskId = task.id
    taskItem.innerHTML = `
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}" ${checked}>
                <label for="task-${task.id}"></label>
            </form>
            <span class="task-item__text">
                ${task.text}
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
            Delete
        </button>
    </div>
    `
    taskList.append(taskItem)
})
addTask()

taskBlock.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target['taskName'].value
    if(inputValue !== '') {
        const task = {
            id: `${Date.now()}`,
            completed: false,
            text: inputValue
        }
        tasks.push(task)
        taskList.innerHTML = ''
        addTask()
    }
})