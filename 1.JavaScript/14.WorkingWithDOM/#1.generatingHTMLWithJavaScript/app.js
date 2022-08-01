const body = document.body

// 1 via innerHTML
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

// 2 via document.createElement()
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
newForm.append(btn)
btn.type = 'submit'
btn.textContent = 'Confirm'