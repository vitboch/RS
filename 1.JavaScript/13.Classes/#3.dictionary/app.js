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

const dictionary = new Dictionary('Explanatory dictionary')
dictionary.add('JavaScript', 'popular programming language')
dictionary.add(
    "Web developer",
    'A person who creates new services and sites or maintains and complements existing ones'
)
dictionary.remove('JavaScript')
dictionary.showAllWords()