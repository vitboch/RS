const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: 'View new JavaScript lesson'
    },
    {
        id: "1138465078062",
        completed: false,
        text: 'Take test after the lesson'
    },
    {
        id: "1138465078063",
        completed: false,
        text: 'Do homework after lesson'
    }
]

const taskList = document.querySelector('.tasks-list')

tasks.forEach(task => {
    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'
    taskItem.dataset.taskId = task.id
    taskList.append(taskItem)

    const container = document.createElement('div')
    container.className = 'task-item__main-container'
    taskItem.append(container)

    const content = document.createElement('div')
    content.className = 'task-item__main-content'
    container.append(content)

    const form = document.createElement('form')
    form.className = 'checkbox-form'
    content.append(form)

    const input = document.createElement('input')
    input.className = 'checkbox-form__checkbox'
    input.type = 'checkbox'
    input.id = `task-${task.id}`
    input.checked = task.completed
    form.append(input)

    const label = document.createElement('label')
    label.htmlFor = `task-${task.id}`
    form.append(label)

    const span = document.createElement('span')
    span.className = 'task-item__text'
    span.textContent = task.text
    content.append(span)

    const button = document.createElement('button')
    button.className = 'task-item__delete-button default-button delete-button'
    button.dataset.deleteTaskId = '5'
    button.textContent = 'Delete'
    container.append(button)
})