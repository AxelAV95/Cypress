Cypress.on('uncaught:exception', (err, runnable) => {
  // Devuelve false para evitar que Cypress falle el test
  return false;
});


describe('Pruebas de páginas de inicio', () => {
  it('Cargar la página de inicio', () => {
    cy.visit('https://unaproyectos-ordenes.000webhostapp.com/ordenes/view/frontend/index.php?pagina=1')
    cy.get('.active > .nav-link').contains('Inicio')
    cy.get('.active > .nav-link').should('contain', 'Inicio')
    cy.get(':nth-child(8) > div > a > img').should('be.visible')
    cy.get('.pagination').should('be.visible')

    cy.wait(2000);

    // Obtener el texto del elemento que indica la página activa
    cy.get('.active > .page-link').then(($activePage) => {
      const activePageNumber = $activePage.text().trim();

      // Si la página activa es "1", verificar que los botones de primera y anterior estén deshabilitados
      if (activePageNumber === '1') {
        // Verificar si el primer elemento tiene la clase 'disabled'
        cy.get('.pagination > :nth-child(1)').should('have.class', 'disabled');

        // Verificar si el tercer elemento tiene la clase 'disabled'
        cy.get('.pagination > :nth-child(3)').should('have.class', 'disabled');
      } else {
        cy.log('La página activa no es la primera');
      }
    });

    cy.get(':nth-child(1) > .card > .card-body > div.text-center > form > .counter > .up').click()
    cy.get(':nth-child(1) > .card > .card-body > div.text-center > form > .btn').click()

  })


})

// describe("Verificar titulo", ()=>{
//   it("Verificar inicio", ()=>{
//     cy.visit('https://unaproyectos-ordenes.000webhostapp.com/ordenes/view/frontend/index.php?pagina=1')
   
//   })
// })