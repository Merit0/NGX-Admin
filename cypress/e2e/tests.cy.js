import { FeaturesSidebar } from "../support/pageObject/FeaturesSidebar"

describe('Tests built with Page Object class', () => {

    beforeEach('Open application', () => {
        cy.OpenApp()
    })

    it('Verify User can navigate across the pages', () => {
        const sideBar = new FeaturesSidebar()
        sideBar.expandTab('Forms')
            .verifyTabIsExpanded('Forms')
            .expandTab('Datepicker')

        sideBar.verifyTabIsCollapsed('Modal & Overlays')
    })

    it('Json objects', () => {
        const object = {
            "key": "value",
            "key2": "value2",
        }

        const strArr = ["one", "two", "three"]

        const objArr = [
            { "key": "value" },
            { "key2": "value2" },
            { "key3": "value3" }
        ]

        const dataTypes = {
            "str": "This string",
            "int": 10
        }

        const complex = {
            "firstName": "fName",
            "lastName": "lName",
            "age": 10,
            "students": [
                {
                    "firstName": "Sarah",
                    "lastName": "Conor",
                },
                {
                    "firstName": "Bruce",
                    "lastName": "Wayne",
                }
            ]
        }

        cy.log(object.key2)
        cy.log(object["key"])
        cy.log(objArr[1]["key2"])
        cy.log(objArr[2].key3)
        cy.log(strArr[1])
        cy.log(complex.students[0].firstName)

    })
})