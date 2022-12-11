///<reference types="cypress"/>
import signup from "../pages/signupPage"


describe('acessar login', ()=>{

       it('com sucesso', ()=>{

        var preenche = {
            email: 'luisitalomoreirasouza@gmail.com',
            senha: '123456'
        }        

        signup.go()
        signup.fillForm(preenche)
        signup.submit()

        const mensagemEsperada = 'Bem vindo, italo luis!'
        signup.verificar(mensagemEsperada)

        
    })

    it('com email invalido', ()=>{

        var preenche = {
            email: 'invalido.gmail.com',
            senha: '123456'
        }
        
        signup.go()
        signup.fillForm(preenche)
        signup.submit()

        const mensagemEsperada = 'Bem vindo, italo luis!'
        signup.verificar(mensagemEsperada)

    })

    it('com senha invalida', ()=>{

        var preenche = {
            email: 'luisitalomoreirasouza@gmail.com',
            senha: '010203'
        }
        
        signup.go()
        signup.fillForm(preenche)
        signup.submit()

        const mensagemEsperada = 'Bem vindo, italo luis!'
        signup.verificar(mensagemEsperada)
         
    })

    it('com email e senha invalidos', ()=>{
        
        var preenche = {
            email: 'invalido@gmail.com',
            senha: '010203'
        }
        
        signup.go()
        signup.fillForm(preenche)
        signup.submit()

        const mensagemEsperada = 'Bem vindo, italo luis!'
        signup.verificar(mensagemEsperada)
    })

    it('com email e senha em branco', ()=>{
        var preenche = {
            email: ' ',
            senha: ' '
        }
        
        signup.go()
        signup.fillForm(preenche)
        signup.submit()

        const mensagemEsperada = 'Bem vindo, italo luis!'
        signup.verificar(mensagemEsperada)
    })
})