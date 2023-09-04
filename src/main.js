class Main {
    #people = [
        {
            "lastname": "Smith",
            "firstname": "Robert",
            "band": "The Cure"
        },
        {
            "lastname": "Idol",
            "firstname": "Billy",
            "band": "Generation X"            
        },
        {
            "lastname": "Hagen",
            "firstname": "Nina",
            "band": "Nina Hagen"            
        },
        {
            "lastname": "Vicious",
            "firstname": "Sid",
            "band": "Sex Pistols"            
        }
    ]

    constructor() {
        this.#run()
    }

    #run() {

        // Les Titres
        const title = document.querySelector('h1')
        title.innerText = 'CD Application'

        const title2 = document.createElement('h2')
        title2.innerText = 'Au revoir'
        document.body.appendChild(title2)

        // Les listes
        const ul = document.createElement('ul')
        this.#people.forEach((p) => {
            const li = document.createElement('li')
            if (p !== 'Billy Idol') {
                li.innerText = p
            } else {
                li.innerHTML = `<strong>${p}</strong>`
            }
            ul.appendChild(li)
        }) 
        document.body.appendChild(ul)

        // Les Tables 
        const table = document.querySelector('tbody')
        this.#people.forEach((p) => {
            const tr = document.createElement('tr')
            const tdLastname = document.createElement('td')
            const tdFirstname = document.createElement('td')
            const tdBand = document.createElement('td')
            tdLastname.innerText = p.lastname
            tdFirstname.innerText = p.firstname
            tdBand.innerText = p.band
            tr.appendChild(tdLastname)
            tr.appendChild(tdFirstname)
            tr.appendChild(tdBand)
            table.appendChild(tr)
        })



    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()