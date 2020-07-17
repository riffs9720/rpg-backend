'use strict'

const Equipamento = use('App/Models/Equipamento')
const Database = use('Database')

class HelmoController {

        /**
   * Show a list of all equipamentos.
   * GET equipamentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({params}) {
    const helmo = await Database
    .from('equipamentos')
    .where({ player_id: params.id, tipo_id: 1 })

    return helmo
  }

}

module.exports = HelmoController
