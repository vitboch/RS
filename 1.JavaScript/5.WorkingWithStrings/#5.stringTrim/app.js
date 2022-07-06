const userString = prompt('Enter text to crop')
    .trim()

const startSliceIndex = Number(
    prompt('Enter the index at which to start trimming the string'))

const endSliceIndex = Number(
    prompt('Enter the index that you want to finish trimming the string'))

const string = userString.slice(startSliceIndex, endSliceIndex)

alert(`Result: ${string}`)