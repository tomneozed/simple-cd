class Main {
    #people = [
        'Robert Smith',
        'Billy Idol',
        'Nina Hagen',
        'Sid Vicious'
    ]

    constructor() {
        this.#run()
    }

    #run() {
        const title = document.querySelector('h1')
        title.innerText = 'CD Application'

        const title2 = document.createElement('h2')
        title2.innerText = 'Au revoir'
        document.body.appendChild(title2)

        const ul = document.createElement('ul')
        for (const p of this.#people) {
            const li = document.createElement('li')
            if (p !== 'Billy Idol') {
                li.innerText = p
            } else {
                li.innerHTML = `<strong>${p}</strong>`
            }
            ul.appendChild(li)    
        }
        document.body.appendChild(ul)
    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()