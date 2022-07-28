class Dictionary {
    #name
    #words

    constructor(name) {
        this.#name = name
        this.#words = {}
    }

    get mainName() {
        return this.#name
    }

    set mainName(value) {
        this.#name = value
    }

    get allWords() {
        return this.#words
    }

    _addNewWord(wordKey = '', wordObj) {
        this.allWords[wordKey] = wordObj
    }

    add(word, description) {
        !this.allWords[word]
            ? this._addNewWord(word, {word: word, description: description})
            : false
    }

    remove(word) {
            delete this.allWords[word]
    }

    get(word) {
        return this.allWords[word]
    }

    showAllWords() {
        Object.keys(this.allWords).forEach(key => {
            console.log(`${this.allWords[key]['word']} - ${this.allWords[key].description}`)
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }

    add(word, description) {
        super.add(word, description)
        this.allWords[word].isDifficult = true
    }
}

const hardWordsDictionary = new HardWordsDictionary('Difficult words')
hardWordsDictionary.add(
    'dilettante',
    'One who engages in science or art without special training, possessing only superficial knowledge.'
)
hardWordsDictionary.add(
    'neologism',
    'A new word or expression, as well as a new meaning for an old word.'
)
hardWordsDictionary.add(
    'quantum',
    'An indivisible part of any quantity in physics.'
)
hardWordsDictionary.remove('neologism')
hardWordsDictionary.showAllWords()
console.log(hardWordsDictionary.mainName)
hardWordsDictionary.mainName = 'New dictionary'
console.log(hardWordsDictionary.mainName)
console.log(hardWordsDictionary.allWords)