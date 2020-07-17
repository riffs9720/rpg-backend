'use strict'

const Equipamento = use('App/Models/Equipamento')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/**
 * Resourceful controller for interacting with equipamentos
 */
class EquipamentoController {
    /**
   * Show a list of all equipamentos.
   * GET equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const equipamento = await Equipamento.all()

    return equipamento
  }

  /**
   * Create/save a new player.
   * POST players
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const player = await Player.create(data)

    return player
  }


  /**
   * Create/save a new equipamento.
   * POST equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const equipamento = await Equipamento.create(data)

    return equipamento
  }

  /**
   * Display a single equipamento.
   * GET equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const equipamento = await Equipamento.find(params.id)

    return equipamento
  }

  /**
   * Update equipamento details.
   * PUT or PATCH equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const equipamento = await Equipamento.find(params.id)

    equipamento.merge(data)

    await equipamento.save()

    return equipamento
  }

  /**
   * Delete a equipamento with id.
   * DELETE equipamentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const equipamento = await Equipamento.find(params.id)

    await equipamento.delete()
  }
}

module.exports = EquipamentoController
