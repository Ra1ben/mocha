describe("test suit 2", () => {
  it("test 1.1", () => {
    cy.visit('https://google.com');
  });
  
  it("test 1.2", () => {
    cy.visit('https://google.com');
  });
});

describe("test suit 2", () => {
  it("test 2.1", () => {
    cy.visit('https://google.com');
  });
  
  it("test 2.2", () => {
    cy.visit('https://google.com');
  });
});

describe("test suit 3", () => {
  it("test 2.3", () => {
    cy.visit('https://google.com');
  });
  
  it("test 2.4", () => {
    cy.visit('https://google.com');
  });
  describe("test suit 4", () => {
    it("test 2.5", () => { 
      cy.visit('https://google.com');
    });
    
    it("test 2.6", () => { 
      cy.visit('https://google.com');
    });
  });
});

// it.only, describe.skip - tiku test de stoit only
// it.skip, describe.skip - propustit test