/// <reference types="cypress"/>

describe('Multiple test form', () =>{
    const users = [
        {name: 'Maxim', email: 'maxim@gmail.com'},
        {name: 'Vova', email: 'vova@gmail.com'},
        {name: 'Petro', email: 'petro@gmail.com'}
    ];

    users.forEach((user) => {
        it(`Ввод даних для юзера ${user.name}`, () =>{
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();
            cy.get('[placeholder="Jane Doe"]').type(user.name);
            cy.get('.form-inline > [placeholder="Email"]').type(user.email);
            cy.get('.form-inline > .appearance-filled').click();

            cy.get('[placeholder="Jane Doe"]').should('contain.value', user.name);
            cy.get('.form-inline > [placeholder="Email"]').should('contain.value', user.email);
        });
    });
});

