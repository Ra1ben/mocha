// before - odin raz
// beforeEach - pered koznim testom test suita


// describe("test suit 2", () => {
    
//   beforeEach(() => {
//     cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
//     cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
//     cy.get('[title="Forms"]').click();
//     cy.get('[title="Form Layouts"]').click();
//   })
  
//   it("test 1.1", () => {
//       cy.get('[placeholder="Jane Doe"]').type('Hello');
//     });
    
//     it("test 1.2", () => {
//       cy.get('[placeholder="Jane Doe"]').type('Hello me!');
//     });
//   });


describe("test suit 2", () => {
    
  beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
    })
    
    afterEach(() => { // після кожного тесту в дескрайбі щось робить, посткондишн
      cy.log('hi');
    });

    it("test 1.1", () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      });
      
    it("test 1.2", () => {
      cy.get('[placeholder="Jane Doe"]').type('Hello me!');
     });
});

afterEach(() => { // або можна після всього
  cy.log('hi');
});
/////


describe.only("retries", () => {
    
  beforeEach(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
    })
    
    afterEach(() => { // після кожного тесту в дескрайбі щось робить, посткондишн
      cy.log('hi');
    });

    it("test 1", {retries: 3}, () => {
        cy.get('[placeholder="Jane Do"]').type('Hello');
      });
      
    it("test 2", () => {
      cy.get('[placeholder="Jane Doe"]').type('Hello me!');
     });
});