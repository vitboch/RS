const showSuccessMessage = message => console.log(message)
const showErrorMessage = message => console.error(message)
const text = 'Hello! How are you! We did not meet each other in a long time.'

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    if (text.includes(errorSymbol)) {
        for (let index = 0; index < text.length; index++) {
            const symbol = text[index]
            if (symbol === errorSymbol) {
                errorCallback(`Forbidden symbol found "${errorSymbol}" under index ${index}`)
            }
        }
    } else successCallback('There are no prohibited characters in this text')
}

checkTextOnErrorSymbol(text, 'a', showSuccessMessage, showErrorMessage)