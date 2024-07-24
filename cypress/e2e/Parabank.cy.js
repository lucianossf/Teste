describe('Taks', () => {
  it('Registrar um usuario', () => {

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    /// Title validado ///

    cy.title().should('eq','ParaBank | Welcome | Online Banking')

    cy.contains('a','Register').click()

    /// Regitrar usuario ///

    cy.get('input[id="customer.firstName"]').type('Marcos')

    cy.get('input[id="customer.lastName"]').type('Silva')

    cy.get('input[id="customer.address.street"]').type('Rua Macedo')

    cy.get('input[id="customer.address.city"]').type('Fortaleza')

    cy.get('input[id="customer.address.state"]').type('Ceara')

    cy.get('input[id="customer.address.zipCode"]').type('54675435')

    cy.get('input[id="customer.phoneNumber"]').type('+6688987652343')

    cy.get('input[id="customer.ssn"]').type('7653478098')

    cy.get('input[id="customer.username"]').type('Marcos S')

    cy.get('input[id="customer.password"]').type('1234')

    cy.get('input[id="repeatedPassword"]').type('1234')

    cy.contains('input','Register') .click()

    /// Fazer login com usuario cadastrado ///

    


  })
})

describe('', () => {
  it.only('', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')

    cy.get('input[name="username"]').type('Marcos S')

    cy.get('input[type="password"]').type('1234')

    cy.contains('input', 'Log In').click()
  });
});