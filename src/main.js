import { TemplateLoader } from "./_helpers/template-loader"
import { PeopleService } from "./services/people-service"

class Main {
    #people = []
    #service = null

    get people() {
        return this.#people
    }

    constructor() {
        this.#service = new PeopleService()
        this.#people = this.#service.people
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
let app
(function () {
    app = new Main()
})()

document.getElementById('main-checkbox').addEventListener(
    'click', 
    (event) => {
        const checkbox = event.target
        const itemCheckboxes = document.getElementsByClassName('item-checkbox')

        let doCheck = false

        if(checkbox.checked) {
            doCheck = true
        }

        for (const itemCheckbox of itemCheckboxes) {
            itemCheckbox.checked = doCheck
        }    
    }
)

const tbody = document.querySelector('tbody')
tbody.addEventListener(
    'click',
    (event) => {
        if (event.target.tagName === 'INPUT') {
            const checkbox = event.target

            if(checkbox.classList.contains('item-checkbox')) {
                const mainCheckbox = document.getElementById('main-checkbox')
                if (checkbox.checked === false) {
                    mainCheckbox.checked = false
                } else {
                    const itemCheckboxes = Array.from(document.getElementsByClassName('item-checkbox'))
                    const checkedItems = itemCheckboxes.filter((itemCheckbox) => itemCheckbox.checked)

                    mainCheckbox.checked = !(checkedItems.length - app.people.length)
                }
            }
        }
    }
)