import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given("Primero realizamos un POST agregando una mascota", () => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            id: 31,
            category: {
                id: 31,
                name: 'pet',
            },
            name: 'Otto',
            photoUrls: ['string'],
            tags: [
                {
                    id: 31,
                    name: 'pet',
                },
            ],
            status: 'available',
        },
    }).then((response) => {
        console.log(response.body)
        expect(response).to.be.an('object')
        expect(response.status).to.eql(200)
        expect(response.body.name).to.eql('Otto')
        cy.log(" Name", response.body.name)
        expect(response.body.id).to.eql(31)
        cy.log(" Id",response.body.id)
    })
    })
When("Luego hacemos un GET de la mascota añadida", () => {
    cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/31',
        headers: {
            status: 'available',
        },
    }).then((response) => {
        expect(response).to.be.an('object')
        expect(response.status).to.eql(200)
        expect(response.body.name).to.eql('Otto')
        cy.log(" Name", response.body.name)
        expect(response.body.id).to.eql(31)
        cy.log(" Id",response.body.id)

    })
})
Then("Por ultimo realizamos un PUT a la mascota cambiandole el nombre a {string}", () => {
    cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            id: 31,
            category: {
                id: 31,
                name: 'string',
            },
            name: 'Avena',
            photoUrls: ['string'],
            tags: [
                {
                    id: 31,
                    name: 'string',
                },
            ],
            status: 'available',
        },
    }).then((response) => {
        expect(response).to.be.an('object')
        expect(response.status).to.eql(200)
        expect(response.body.name).to.eql('Avena')
        cy.log(" Name", response.body.name)
        expect(response.body.id).to.eql(31)
        cy.log(" Id",response.body.id)

    })
})
