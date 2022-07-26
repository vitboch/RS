class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, description) {
        this['words'][word] = {word: word, description}
    }

    remove(word) {
        delete this['words'][word]
    }

    get(word) {
        console.log(this['words'][word] ? this['words'][word] : false)
    }

    showAllWords() {
        Object.keys(this['words']).forEach(key => {
            console.log(`${this['words'][key]['word']} - ${this['words'][key].description}`)
        })
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }

    add(word, description) {
        this['words'][word] = {word: word, description, isDifficult: true}
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