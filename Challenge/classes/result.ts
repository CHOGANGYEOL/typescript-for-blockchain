type Words = {
    [ket: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    // test용
    showObject() {
        return this.words
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    get(term: string) {
        if (this.words[term]) {
            return this.words[term];
        } else {
            new Error("찾는 단어가 없습니다.")
            return
        }
    }
    delete(term: string) {
        if (this.words[term]) {
            delete this.words[term]
        }
    }
    update(word: Word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def
        } else {
            new Error("찾는 단어가 없습니다.")
        }
    }
    showAll() {
        const keys = Object.keys(this.words)
        return keys.join(", ")
    }
    count() {
        const keys = Object.keys(this.words)
        return keys.length
    }
    upsert(word: Word) {
        this.words[word.term] = word.def
    }
    bulkAdd(arr: Word[]) {
        arr.forEach((el) => {
            this.upsert(el)
        })
    }
    bulkDelete(arr: string[]) {
        arr.forEach((el) => {
            this.delete(el)
        })
    }
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) { }
}

const kimchi = new Word("kimchi", "한국 음식");
const sushi = new Word("sushi", "일본 음식");
const pasta = new Word("pasta", "이태리 음식");

const dict = new Dict()

// add
dict.add(kimchi)
dict.add(sushi)

// showAll
console.log(dict.showAll());

// get
console.log(dict.get("kimchi"))

// delete
dict.delete("sushi")
console.log(dict.showAll());

// update
kimchi.def = "한국 음식 수정"
dict.update(kimchi)
console.log(dict.showObject());

// count
console.log(dict.count());

// upsert
dict.upsert(pasta)
console.log(dict.showAll());

// bulkAdd
const test1 = new Word("test1", "test1Def");
const test2 = new Word("test2", "test2Def");
const test3 = new Word("test3", "test3Def");
const test4 = new Word("test4", "test4Def");
const test5 = new Word("test5", "test5Def");
const arr = [test1, test2, test3, test4, test5]
dict.bulkAdd(arr)
console.log(dict.showAll())

// bulkDelete
const deleteArr = ["test1", "test2", "test3"]
dict.bulkDelete(deleteArr)
console.log(dict.showAll())