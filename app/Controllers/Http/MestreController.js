'use strict'

const Mestre = use('App/Models/Mestre')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/**
 * Resourceful controller for interacting with mestres
 */

class MestreController {

  /**
   * Show a list of all mestres.
   * GET mestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const mestre = await Mestre.all()

    return mestre
  }

  /**
   * Create/save a new mestre.
   * POST mestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all()
    const mestre = await Mestre.create(data)

    return mestre
  }

  /**
   * Display a single mestre.
   * GET mestre/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const mestre = await Mestre.find(params.id)

    return mestre
  }

  /**
   * Update mestre details.
   * PUT or PATCH mestre/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const mestre = await Mestre.find(params.id)

    mestre.merge(data)

    await mestre.save()

    return mestre
  }

  /**
   * Delete a mestre with id.
   * DELETE mestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mestre = await Mestre.find(params.id)

    await mestre.delete()
  }

}

module.exports = MestreController
