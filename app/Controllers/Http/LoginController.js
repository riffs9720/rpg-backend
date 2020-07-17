'use strict'

const Player = use('App/Models/Player')
const Mestre = use('App/Models/Mestre')

class LoginController {

  async autenticacao({ request, auth, response }){
    const { nome, password } = request.all()

    const token = await auth.attempt(nome, password)

    const user = await Player.findBy('nome', nome)

    if(user == null){
      user = await Mestre.findBy('nome', nome)
    }

    if (token) {
      response.response.setHeader(
        "Nivel",
        user.nivelAcesso
      );
    }
    return user;
  }

}

module.exports = LoginController
