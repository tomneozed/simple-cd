class Main {
    constructor() {
        this.#run()
    }

    #run() {
        const title = document.querySelector('h1')
        title.innerText = 'CD Application'
    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()