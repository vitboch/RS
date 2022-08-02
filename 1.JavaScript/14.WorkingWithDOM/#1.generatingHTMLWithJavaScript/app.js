const body = document.body

// 1 create with innerHTML
body.innerHTML = `
<form class="create-user-form">
  <label>
    Name
    <input type="text" name="userName" placeholder="Enter your name" />
  </label>
  <label>
    Password
    <input type="password" name="password" placeholder="Create a password" />
  </label>
  <button type="submit">
    Confirm
  </button>
</form>
`

// 2 create with document.createElement()
const newForm = document.createElement('form')
newForm.className = 'create-user-form'
body.append(newForm)

const labelName = document.createElement('label')
labelName.textContent = 'Name'
newForm.append(labelName)

const inputName = document.createElement('input')
inputName.type = 'text'
inputName.name = 'userName'
inputName.placeholder = 'Enter your name'
labelName.append(inputName)

const labelPassword = document.createElement('label')
labelPassword.textContent = 'Password'
newForm.append(labelPassword)

const inputPassword = document.createElement('input')
inputPassword.type = 'password'
inputPassword.name = 'password'
inputPassword.placeholder = 'Create a password'
labelPassword.append(inputPassword)

const btn = document.createElement('button')
btn.type = 'submit'
btn.textContent = 'Confirm'
newForm.append(btn)

// create with function
const createTag = (parent, mainName, type, name, placeholder, text, className) => {
    mainName = document.createElement(`${mainName}`)
    type !== '' ? mainName.type = type : null
    name !== '' ? mainName.name = name : null
    placeholder !== '' ? mainName.placeholder = placeholder : null
    text !== '' ? mainName.textContent = text : null
    className !== undefined ? mainName.className = className : null
    parent.append(mainName)
    return mainName
}

const form = createTag(body,'form', '', '', '', '',  'create-user-form')
const nameLabel = createTag(form,'label', '', '', '', 'Name' )
createTag(nameLabel, 'input', 'text', 'userName', 'Enter your name')
const passwordLabel = createTag(form,'label', '', '', '', 'Password' )
createTag(passwordLabel, 'input', 'password', 'password', 'Create a password')
createTag(form, 'button', 'submit', '', '', 'Confirm')