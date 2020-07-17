'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Nivel {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    const nivel = request.header('Nivel')

    if(nivel === 'Mestre'){
      await next()
    }else {
      response.status(401).send("Você precisa ser mestre para ter acesso a esta função")
    }
  }
}

module.exports = Nivel
