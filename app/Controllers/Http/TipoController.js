'use strict'

const Tipo = use('App/Models/Tipo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/**
 * Resourceful controller for interacting with tipos
 */
class TipoController {
  /**
   * Show a list of all tipos.
   * GET tipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const tipo = await Tipo.all()

    return tipo
  }

  /**
   * Create/save a new tipo.
   * POST tipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const tipo = await Tipo.create(data)

    return tipo
  }

  /**
   * Display a single tipo.
   * GET tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const tipo = await Tipo.find(params.id)

    return tipo
  }

  /**
   * Update tipo details.
   * PUT or PATCH tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const tipo = await Tipo.find(params.id)

    tipo.merge(data)

    await tipo.save()

    return tipo
  }

  /**
   * Delete a tipo with id.
   * DELETE tipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const tipo = await Tipo.find(params.id)

    await tipo.delete()
  }
}

module.exports = TipoController
