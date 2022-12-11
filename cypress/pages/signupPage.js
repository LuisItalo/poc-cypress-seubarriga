

class SignupPage {

    go(){
        cy.visit('/login')
    }

    fillForm(preenche){
        cy.get('input[name="email"]').type(preenche.email)
        cy.get('input[name="senha"]').type(preenche.senha)
    }

    submit(){
        cy.get('button[type="submit"]').click() 
    }

    verificar(mensagemEsperada){
        cy.get('.alert').should('have.text', mensagemEsperada) 
    }
}

export default new SignupPage;