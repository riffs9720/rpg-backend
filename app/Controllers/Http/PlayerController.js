'use strict'

const Player = use('App/Models/Player')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/**
 * Resourceful controller for interacting with players
 */

class PlayerController {

  /**
   * Show a list of all players.
   * GET players
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const player = await Player.all()

    return player
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
   * Display a single player.
   * GET players/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const player = await Player.find(params.id)

    return player
  }

  /**
   * Update player details.
   * PUT or PATCH players/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.body
    const player = await Player.find(params.id)

    player.merge(data)

    await player.save()

    return player
  }

  /**
   * Delete a player with id.
   * DELETE players/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const player = await Player.find(params.id)

    await player.delete()
  }

}

module.exports = PlayerController
