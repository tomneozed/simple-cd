import { TemplateLoader } from "./_helpers/template-loader"

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
            if (p.firstname !== 'Billy' && p.lastname !== 'Idol') {
                li.innerText = p.firstname + p.lastname
            } else {
                li.innerHTML = `<strong>${p.firstname + p.lastname}</strong>`
            }
            ul.appendChild(li)
        }) 
        document.body.appendChild(ul)

        // Les Tables 
        const table = document.querySelector('tbody')
        this.#people.forEach((person) => {
            const tr = document.createElement('tr')

            tr.appendChild(Main.#makeCheckboxTd())

            for (const attribute in person) {
                const td = document.createElement('td')
                td.innerText = person[attribute]
                tr.appendChild(td)
            }

            table.appendChild(tr)
        })
    }

    static #makeCheckboxTd() {
        const td = document.createElement('td')
        const templateLoader = new TemplateLoader('item-checkbox')
        try {
            const checkox = templateLoader.loadTemplate()
            td.appendChild(checkox)
        } catch (e) {
            td.innerHTML = '&nbsp;'
        }
        return td
    }
}

// Self callable function to run the Main class
(function () {
    const app = new Main()
})()

document.getElementById('main-checkbox').addEventListener(
    'click', 
    (event) => {
        const checkbox = event.target
        if (checkbox.checked) {
            console.log('Have to check all lines')
        } else {
            console.log('Have to uncheck all lines')
        }
    })