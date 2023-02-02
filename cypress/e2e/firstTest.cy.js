/// <reference types = "cypress" />

describe('Our Login User Suite', () => {

    beforeEach('Before test', () => {
        cy.visit("/")
        cy.get('[ng-reflect-icon="menu-2-outline"]').should('be.visible')
    })

    it('Verify Basic form with "Check me out" can be submitted', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Check me out').click()
        cy.contains('Basic form').parent().find('[ng-reflect-status="danger"]').click()

        // cy.get('input')
        // cy.get('#inputEmail1')
        // cy.get('.input-full-width')

        //get el by attr name
        // cy.get('[placeholder]')
        //get el by attr value
        // cy.get('[placeholder="Email"]')
        // //get by class value
        // cy.get('[class="inputfull-class-name some like this"]')
        // // by tag name and attr value
        // cy.get('input[placeholder="Email"]')
        // //by two different attributes
        // cy.get('[placeholder="Email"][type="someType]')
        // //get by tag name attr with value, ID, Class name
        // cy.get('input[attr="attrValue"]#idName.className') //Oo

        // //best practice by cypress create your own attr with value in dev code
        // cy.get()
    })

    it('Verify Block form can be submitted with only "Email" populated', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Check me out').click()
        cy.contains('Block form').parent().find('.status-primary').click()
    })


    it('Verify Horizontal form can be submitted without "@" sign', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Remember me').click()
        cy.contains('nb-card', 'Horizontal form').then(form => {
            form.find('[for="inputEmail3"]').text()
            const passwordLabel = form.find('[for="inputPassword3"]').text()
            expect(passwordLabel).to.equal('Password')
        })
    })

    it('Verify checkbox "Check me out" on "Basic form" can be checked', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain', 'checked') //also valid
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })

    })

    it('Verify date picker date is selected on Common Datepicker', () => {
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        // cy.contains('nb-card', 'Common Datepicker')
        // .find('input')
        // .click()
        // .get('nb-calendar')
        // .should('be.visible')
        // .get('nb-calendar-day-cell')
        // .first()
        // .click()

        // cy.contains('nb-card', 'Common Datepicker')
        // .find('input')
        // .invoke('prop', 'value')
        // .should('equal', 'Oct 30, 2022')

        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then(input => {
                cy.wrap(input).click()
                cy.get('nb-calendar')
                    .should('be.visible')
                    .get('nb-calendar-day-cell')
                    .first()
                    .click()
                cy.wrap(input)
                    .invoke('prop', 'value')
                    .should('equal', 'Oct 30, 2022')
            })
    })

    it('Verify radio buttons can be switched on "Using the Grid" form', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // cy.contains('nb-card', 'Using the Grid')                 //OK
        //     .get('nb-radio')
        //     .first()
        //     .then(radio => {
        //         cy.wrap(radio).find('.inner-circle').click()

        //     })

        // cy.contains('nb-card', 'Using the Grid')                  //OK
        //     .get('nb-radio')
        //     .then(radios => {
        //         cy.wrap(radios).contains('Option 1').click()
        //     })


        // cy.contains('nb-card', 'Using the Grid')                   //OK
        //     .get('nb-radio')
        //     .then(radio => {
        //         cy.wrap(radio)
        //         .first()
        //         .find('input')
        //         .check({ force: true })
        //         .should('be.checked')
        //     })


        // cy.contains('nb-card', 'Using the Grid').within(form => {     //OK
        //     cy.get('nb-radio')
        //         // .first()
        //         .eq(1)
        //         .find('input')
        //         .check({ force: true })
        //         .should('be.checked')
        // })


        // .get('nb-radio')
        // .then(radio => {
        //     cy.wrap(radio)
        //         .first()
        //         .find('input')
        //         .check({ force: true })
        //         .should('be.checked')
        // })

        cy.contains('nb-card', 'Using the Grid')                    //OK
            .get('[type="radio"]').then(radioButtons => {
                const firstRadio = cy.wrap(radioButtons).first()
                firstRadio
                    .check({ force: true })
                    .should('be.checked')

                const option2 = cy.wrap(radioButtons).eq(1)

                option2
                    .check({ force: true })
                    .should('be.checked')

                cy.wrap(radioButtons)
                    .first()
                    .should('not.be.checked')

                const disabledOption = cy.wrap(radioButtons).eq(2)

                disabledOption.should('be.disabled')
            })
    })

    it('Verify checkboxes can be checked', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.contains('nb-card', 'Toaster configuration')
            .within(form => {
                const checkboxes = cy.wrap(form).get('[type="checkbox"]')
                const hideOnClick = checkboxes.first()
                hideOnClick
                    .uncheck({ force: true })
                    .should('not.be.checked')

                const preventArisingOfDuplicateToast = cy.wrap(form).get('[type="checkbox"]').eq(1)

                preventArisingOfDuplicateToast
                    .check({ force: true })
                    .should('be.checked')

                const showToastWithIcon = cy.wrap(form).get('[type="checkbox"]').eq(2)

                showToastWithIcon
                    .uncheck({ force: true })
                    .should('not.be.checked')

                hideOnClick.check({ force: true }).should('be.checked')
            })
    })

    it('Verify dropdown option can be selected', () => {

        //----------------------------------------------------- //OK
        // const dropDownBtn = cy.get('nav nb-select')                                                  
        //     .find('button')

        // dropDownBtn.click()                                                                                

        // cy.get('.options-list').contains('Dark').click()

        // cy.get('div nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        // dropDownBtn.then(btn => {
        //     expect(btn.text()).to.contain('Dark')
        // })


        // dropDownBtn.click()

        // cy.get('.options-list').contains('Cosmic').click()

        // cy.get('div nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)')

        // dropDownBtn.then(btn => {
        //     expect(btn.text()).to.contain('Cosmic')
        // })

        // dropDownBtn.click()

        // cy.get('.options-list').contains('Light').click()

        //----------------------------------------------------- //OK
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown)
                .find('button')
                .click()

            cy.get('nb-option').each((option, index) => {
                const text = option.text().trim()
                cy.wrap(option).click()
                cy.wrap(dropdown).should('contain', text)
                cy.get('div nb-layout-header nav').should('have.css', 'background-color', colors[text])
                if (index < 3) {
                    cy.wrap(dropdown)
                        .find('button')
                        .click()
                }
            })
        })
        //-----------------------------------------------------

        // selectItem(dropDownBtn, 'Dark')                  //1234

        // selectItem(dropDownBtn, 'Light')                 //1234
    })

    it('Verify how to use elements in table', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //-----------------------------------------------------------------   //OK
        cy.get('tbody').contains('tr', 'Jacob').then(tRow => {
            cy.wrap(tRow).find('.nb-edit').parent().click()
            cy.wrap(tRow).find('[placeholder="Age"]').clear().type('35')
            cy.wrap(tRow).find('.nb-checkmark').click()
            cy.wrap(tRow).find('td').last().should('contain', '35')
        })
        //-----------------------------------------------------------------


    })

    it('Verify record can be added in table', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //-----------------------------------------------------------------   //OK
        cy.get('table .nb-plus')
            .parent()
            .click()
        cy.get('tr[ng2-st-thead-form-row]').then(newRow => {
            cy.wrap(newRow)
                .find('[placeholder="First Name"]')
                .clear()
                .type('Oleh')
            cy.wrap(newRow)
                .find('[placeholder="Last Name"]')
                .clear()
                .type('Semeniuk')
            cy.wrap(newRow)
                .find('a')
                .first()
                .click()

        })
        cy.get('tbody').find('tr').first().then(row => {
            expect(row.find('td').eq(2).text())
                .to.equal('Oleh')
            expect(row.find('td').eq(3).text())
                .to.equal('Semeniuk')
        })
        //-----------------------------------------------------------------
    })

    it('Verify filtering in table', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        //-----------------------------------------------------------------   //OK
        // cy.get('[placeholder="Age"]')
        //     .clear()
        //     .type('20')

        // cy.get('tbody tr').should('have.length', 5).each(row => {
        //     // cy.wrap(row).find('td div').last().should('contain', 20) //OK contain not to so clear check
        //     const text = row.find('td').last().text()
        //     expect(text).to.equal('20')
        // })
        //----------------------------------------------------------------- //OK
        const ages = [20, 101, 40]

        cy.wrap(ages).each(age => {
            cy.get('[placeholder="Age"]')
                .clear()
                .type(age)
            cy.wait(500)
            cy.get('tbody tr').then(row => {
                if (age > 100) {
                    const text = row.find('td').text()
                    expect(text).to.equal('No data found')

                } else {
                    let text = row.find('td').last().text()
                    expect(text).to.equal(age.toString())
                }
            })
        })
        //----------------------------------------------------------------- //OK
        // cy.get('[placeholder="Age"]')
        //     .clear()
        //     .type('200')
        // cy.wait(500)
        // cy.get('tbody tr').then(row => {
        //     const text = row.find('td').text()
        //     expect(text).to.equal('No data found')
        // })
        //----------------------------------------------------------------- 
    })

    it('Verify Date picker ability', () => {

        function selectDate(day) {
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleString('deafault', { month: 'short' })
            let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(attrValue => {
                if (!attrValue.includes(futureMonth)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDate(day)
                } else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                }
            })
            return dateAssert
        }


        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then(input => {
                cy.wrap(input).click()
                const dateToAssert = selectDate(10)
                cy.wrap(input)
                    .invoke('prop', 'value')
                    .should('equal', dateToAssert)
            })
    })

    it('Verify tooltip functionality', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        // ----------------------------------------------------------------------------- OK
        // cy.contains('nb-card', 'Colored Tooltips').within(($card) => {
        //     cy.contains('button', 'Default').click()
        // })
        // cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        // ----------------------------------------------------------------------------- OK
        cy.contains('nb-card', 'Colored Tooltips').then(card => {
            cy.wrap(card).contains('button', 'Default').click()
            cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        })
        // ----------------------------------------------------------------------------- OK
        // cy.contains('nb-card', 'Colored Tooltips')
        //     .contains('Default')
        //     .click()
        // cy.get('nb-tooltip').should('contain', 'This is a tooltip')
        // -----------------------------------------------------------------------------
    })


    it.only('Verify Overlays', () => {
        // ----------------------------------------------------------------------------- OK
        // cy.contains('Tables & Data').click()
        // cy.contains('Smart Table').click()

        // cy.contains('nb-card', 'Smart Table').within(table => {
        //     cy.wrap(table)
        //         .find('tbody tr')
        //         .then(rows => {
        //             cy.wrap(rows)
        //                 .first()
        //                 .find('.nb-trash')
        //                 .click()
        //         })
        //     })
        //     cy.on('window:confirm', (confirm) => {
        //         expect(confirm).to.equal('Are you sure you want to delete?')
        //     })

        // ----------------------------------------------------------------------------- OK
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.contains('nb-card', 'Smart Table').within(table => {
            cy.wrap(table)
                .find('tbody tr')
                .then(rows => {
                    cy.wrap(rows)
                        .first()
                        .find('.nb-trash')
                        .click().then(() => {
                            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
                        })
                })
        })
        // ----------------------------------------------------------------------------- OK
    //     cy.contains('Tables & Data').click()
    //     cy.contains('Smart Table').click()
    //     cy.contains('nb-card', 'Smart Table').within(table => {
    //         cy.wrap(table)
    //             .find('tbody tr')
    //             .then(rows => {
    //                 cy.wrap(rows)
    //                     .first()
    //                     .find('.nb-trash')
    //                     .click().then(() => {
    //                         cy.on('window:confirm', () => false)
    //                     })
    //             })
    //     })
    })

}) //TODO: suite ends

// function selectItem(dropdown, item) {                 //1234
//     dropdown.click()
//     cy.get('.options-list').contains(item).click()
// }

// cy.get("#Table Id")
// .find("tr")
// .then((rows) => {
//   rows.toArray().forEach((element) => {
//     if (element.innerHTML.includes("Your Value")) {
//     //rows.index(element) will give you the row index
//       cy.log(rows.index(element));
//     }
//   });
// });

// cy.get('table thead')                                    //TODO: IMPORTENT
//     .contains('th', 'someValue')
//     .invoke('index')
//     .then(index => {
//         cy.contains('td', 'SomeValue')
//             .should('have.length', 1)
//             .siblings()
//             .eq(index - 1)
//             .invoke('text')
//             .should('eq', 'providerData')
//     })


// function getColumnIndex(columnName) {
//     cy.get('table thead th .ng2-smart-title').each((el, index) => {
//         // cy.log(el.text().trim())
//         // cy.log(index)
//         // cy.log(el.text() === 'Username'.toLowerCase() ? 'true': 'false')
//         const v = el.text()

//         if (v === 'ID') {
//             cy.log('Yes')
//             return 'Yes'

//         } else {
//             cy.log('No')
//         }
//     })
//     // throw new Error('Column was not found')
// }

const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 69)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)",
}
